// app/api/fortune/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';

// 定义请求参数的验证模式
const fortuneRequestSchema = z.object({
  name: z.string().min(1, '姓名不能为空'),
  birthDate: z.string().min(1, '出生日期不能为空'),
  gender: z.enum(['male', 'female'], { errorMap: () => ({ message: '性别必须是男性或女性' }) }),
  fortuneType: z.enum(['home', 'personal', 'office', 'business'], { errorMap: () => ({ message: '请选择有效的测算类型' }) }),
  question: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    // 解析请求体
    const body = await request.json();
    
    // 验证请求参数
    const validatedData = fortuneRequestSchema.parse(body);
    
    // 模拟测算逻辑（实际应用中应该有更复杂的算法）
    const calculateFortune = (data: typeof validatedData) => {
      // 这里只是一个简单的模拟，实际应用中应该有基于风水理论的算法
      const { name, birthDate, gender, fortuneType } = data;
      
      // 基于姓名和出生日期生成一个简单的分数（0-100）
      const nameScore = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 50 + 50;
      const birthScore = parseInt(birthDate.replace(/-/g, '')) % 50 + 50;
      const baseScore = Math.round((nameScore + birthScore) / 2);
      
      // 根据测算类型调整分数
      let finalScore;
      switch (fortuneType) {
        case 'home':
          finalScore = Math.round(baseScore * 0.95);
          break;
        case 'personal':
          finalScore = Math.round(baseScore * 1.05);
          break;
        case 'office':
          finalScore = Math.round(baseScore * 0.9);
          break;
        case 'business':
          finalScore = Math.round(baseScore * 1.1);
          break;
        default:
          finalScore = baseScore;
      }
      
      // 确保分数在0-100之间
      finalScore = Math.max(0, Math.min(100, finalScore));
      
      // 根据分数生成评价
      let evaluation;
      let suggestions = [];
      let advantages = [];
      
      if (finalScore >= 80) {
        evaluation = '非常好';
        advantages = [
          '您的运势非常强劲，各方面发展顺利',
          '人际关系和谐，容易得到贵人相助',
          '财运亨通，投资回报率高',
        ];
        suggestions = [
          '保持谦虚谨慎的态度，避免骄傲自满',
          '适当回馈社会，积累更多善缘',
          '继续保持良好的生活习惯和工作态度',
        ];
      } else if (finalScore >= 60) {
        evaluation = '良好';
        advantages = [
          '整体运势稳定，有较好的发展前景',
          '工作和生活中能够遇到一些机遇',
          '家庭关系和谐，生活质量较高',
        ];
        suggestions = [
          '注意把握机会，主动争取更好的发展',
          '加强人际关系建设，扩大人脉网络',
          '保持积极乐观的心态，面对挑战',
        ];
      } else if (finalScore >= 40) {
        evaluation = '一般';
        advantages = [
          '基本能够维持现状，生活相对稳定',
          '在某些方面仍有发展潜力',
          '有一定的适应能力，能够应对变化',
        ];
        suggestions = [
          '需要更加努力，提升自身能力',
          '注意调整心态，保持积极向上',
          '寻求专业指导，改善不利因素',
          '加强学习，不断提升自己',
        ];
      } else {
        evaluation = '较差';
        advantages = [
          '虽然当前运势不佳，但仍有转机',
          '经历困难会使人更加成熟和坚强',
          '每个低谷都是上升的开始',
        ];
        suggestions = [
          '积极寻求改变，突破当前困境',
          '调整生活和工作环境，改善风水',
          '多与正能量的人交往，吸收积极影响',
          '保持健康的生活方式，增强体质',
          '耐心等待时机，不要急于求成',
        ];
      }
      
      // 根据测算类型添加特定的建议和评价
      let typeSpecificContent = {};
      
      switch (fortuneType) {
        case 'home':
          typeSpecificContent = {
            specificEvaluation: `${evaluation}。您的家居环境整体和谐，适合居住和生活。`,
            specificSuggestions: [
              '注意保持家居整洁，定期清理杂物',
              '适当摆放一些招财植物，提升财运',
              '确保卧室通风良好，保持空气流通',
              '注意家具摆放位置，避免阻碍气场流通',
            ],
          };
          break;
        case 'personal':
          typeSpecificContent = {
            specificEvaluation: `${evaluation}。您的个人运势较为顺遂，各方面发展较为平衡。`,
            specificSuggestions: [
              '保持良好的作息习惯，充足的睡眠对运势很重要',
              '注意饮食健康，合理搭配营养',
              '适当进行体育锻炼，增强体质和活力',
              '保持积极乐观的心态，笑口常开',
            ],
          };
          break;
        case 'office':
          typeSpecificContent = {
            specificEvaluation: `${evaluation}。您的办公环境对工作效率和事业发展有一定的促进作用。`,
            specificSuggestions: [
              '注意办公桌的摆放位置，避免背对大门',
              '保持办公区域整洁，减少杂物堆积',
              '适当摆放一些开运物品，提升工作运势',
              '注意与同事的沟通方式，建立良好的人际关系',
            ],
          };
          break;
        case 'business':
          typeSpecificContent = {
            specificEvaluation: `${evaluation}。您的商业运势有一定的发展潜力，但需要注意一些方面的调整。`,
            specificSuggestions: [
              '注意店铺或公司的门面形象，给客户良好的第一印象',
              '合理规划空间布局，确保动线流畅',
              '关注市场变化，及时调整经营策略',
              '重视客户体验，提升服务质量',
            ],
          };
          break;
      }
      
      return {
        score: finalScore,
        overallEvaluation: evaluation,
        advantages,
        suggestions,
        ...typeSpecificContent,
      };
    };
    
    // 生成测算结果
    const result = calculateFortune(validatedData);
    
    // 返回成功响应
    return NextResponse.json({
      success: true,
      data: {
        request: validatedData,
        result,
      },
    });
  } catch (error) {
    // 处理验证错误
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: '请求参数验证失败',
            details: error.errors.map((e) => e.message).join(', '),
          },
        },
        { status: 400 }
      );
    }
    
    // 处理其他错误
    return NextResponse.json(
      {
        success: false,
        error: {
          message: '测算过程中发生错误',
          details: error instanceof Error ? error.message : '未知错误',
        },
      },
      { status: 500 }
    );
  }
}

// GET请求返回API说明
export async function GET() {
  return NextResponse.json({
    message: '风水运势测算API',
    method: 'POST',
    requiredFields: {
      name: 'string 姓名',
      birthDate: 'string 出生日期 (YYYY-MM-DD)',
      gender: 'string 性别 (male/female)',
      fortuneType: 'string 测算类型 (home/personal/office/business)',
    },
    optionalFields: {
      question: 'string 具体问题',
    },
  });
}