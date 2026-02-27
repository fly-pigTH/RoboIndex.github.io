const siteContent = {
  zh: {
    brand: "RoboIndex",
    navProposal: "Proposal",
    navFeatures: "核心功能",
    navRepos: "开源论文",
    navGuide: "投稿经验",
    navRoadmap: "路线图",
    navKpis: "KPI",
    heroEyebrow: "Agent Era Robotics Research Infrastructure",
    heroTitle: "机器人科研成果与投稿经验的结构化入口",
    heroSubtitle:
      "RoboIndex 聚焦论文、开源仓库与投稿经验协作，帮助科研者把分散信息沉淀为可复用的数据资产。",
    heroCtaPrimary: "阅读 Proposal",
    heroCtaSecondary: "查看 RA-L 经验摘要",
    heroStat1Title: "启动路径",
    heroStat1Text: "先用静态 GitHub Pages 快速上线展示与验证。",
    heroStat2Title: "核心差异",
    heroStat2Text: "论文索引 + 投稿经验 + 开源聚合 + 社区互动。",
    heroStat3Title: "长期价值",
    heroStat3Text: "形成可检索、可调用、可扩展的机器人科研数据资产。",
    proposalKicker: "Project Brief",
    proposalTitle: "项目定位与愿景",
    proposalIntro:
      "RoboIndex 定位为机器人科研开源与经验社区，目标是建立学术成果传播、工程实践与知识沉淀之间的高效桥梁。",
    proposalVisionTitle: "核心理念",
    proposalVisionText:
      "在 Agent 时代，写作能力是科研者的核心竞争力；数据资产与入口能力将决定长期影响力。",
    proposalQuote:
      "Writing is the distilled skill of human intelligence in the agent era; data is the asset, and the entrance is the power.",
    proposalUsersTitle: "核心用户",
    users: [
      "博士生 / 科研人员",
      "初级科研者（投稿经验匮乏）",
      "机器人领域工程师",
      "实验室研究团队"
    ],
    problemKicker: "Market Opportunity",
    problemTitle: "当前痛点与差异化",
    painPoints: [
      {
        title: "信息碎片化",
        text: "论文、代码、投稿经验分散在不同平台，检索链路断裂。"
      },
      {
        title: "经验难沉淀",
        text: "高价值投稿经验缺乏结构化记录，难以复用和传承。"
      },
      {
        title: "社区弱连接",
        text: "学术讨论与工程实践协同不足，贡献者激励机制不健全。"
      },
      {
        title: "数据资产缺失",
        text: "缺少统一数据层，后续 API 与 Agent 接口难以构建。"
      }
    ],
    tablePlatform: "平台",
    tablePaperIndex: "论文索引",
    tableSubmissionExp: "投稿经验",
    tableOpenSourceAgg: "开源聚合",
    tableCommunity: "社区互动",
    platforms: [
      {
        name: "Google Scholar",
        paperIndex: "yes",
        submissionExp: "no",
        openSourceAgg: "no",
        community: "no"
      },
      {
        name: "Academia.edu",
        paperIndex: "yes",
        submissionExp: "no",
        openSourceAgg: "no",
        community: "partial"
      },
      {
        name: "OpenReview",
        paperIndex: "yes",
        submissionExp: "no",
        openSourceAgg: "no",
        community: "no"
      },
      {
        name: "RoboIndex",
        paperIndex: "yes",
        submissionExp: "yes",
        openSourceAgg: "yes",
        community: "yes"
      }
    ],
    featuresKicker: "Product Design",
    featuresTitle: "首版页面展示的核心能力",
    featureCards: [
      {
        title: "结构化论文展示",
        text: "围绕题目、方向、代码、数据与贡献点组织机器人论文元信息。"
      },
      {
        title: "投稿经验卡片",
        text: "用结构化卡片沉淀审稿周期、rebuttal 策略和实操注意事项。"
      },
      {
        title: "开源仓库导航",
        text: "打通论文与代码，统一入口浏览 demo、仓库和关键实现细节。"
      },
      {
        title: "社区贡献机制",
        text: "通过 PR 与署名机制鼓励高质量内容贡献和协作编辑。"
      },
      {
        title: "内容可复用",
        text: "标准化字段设计，为后续检索、统计、推荐与 API 提供基础。"
      },
      {
        title: "伦理边界清晰",
        text: "坚持经验分享定位，不触及利益交换与付费投稿辅导。"
      }
    ],
    reposKicker: "Open Source Papers",
    reposTitle: "开源 Paper 展示（ICRA / IROS / RA-L）",
    reposIntro:
      "卡片流已加入 EquiMus 官方仓库，以及郝策老师主页中的代表性论文（ICRA / IROS / RA-L），并提供预览图。",
    repoCards: [
      {
        badge: "RA-L 2025",
        title: "EquiMus",
        subtitle: "官方仓库：Musculoskeletal Robot 能量等效建模与仿真",
        tags: ["#EquiMus", "#Musculoskeletal", "#RA-L"],
        link: "https://github.com/fly-pigTH/EquiMus",
        image: "assets/paper-previews/equimus.png"
      },
      {
        badge: "ICRA 2024",
        title: "GAMMA",
        subtitle: "郝策老师论文：Generalizable Articulation Modeling and Manipulation",
        tags: ["#CeHao", "#ICRA", "#Articulation"],
        link: "https://sites.google.com/view/gamma-articulation",
        image: "assets/paper-previews/gamma.png",
        video: "assets/paper-previews/gamma.mp4"
      },
      {
        badge: "RA-L 2024 · IROS 2024",
        title: "Skill-Critic",
        subtitle: "郝策老师论文：Refining Learned Skills for Hierarchical RL",
        tags: ["#CeHao", "#IROS", "#RA-L"],
        link: "https://sites.google.com/view/skill-critic",
        image: "assets/paper-previews/skill-critic.png",
        video: "assets/paper-previews/skill-critic.mp4"
      },
      {
        badge: "RA-L 2025 · ICRA 2026",
        title: "REBot",
        subtitle: "郝策老师论文：Reflexive Evasion Robot",
        tags: ["#CeHao", "#RA-L", "#Quadruped"],
        link: "https://rebot-2025.github.io/",
        image: "assets/paper-previews/rebot.png",
        video: "assets/paper-previews/rebot.mp4"
      },
      {
        badge: "IROS 2024",
        title: "RISE",
        subtitle: "3D 感知驱动的真实机器人模仿学习",
        tags: ["#ImitationLearning", "#3DPerception", "#Policy"],
        link: "https://github.com/rise-policy/RISE",
        image: "assets/paper-previews/rise.png"
      },
      {
        badge: "RA-L 2024",
        title: "STAR-Searcher",
        subtitle: "复杂未知环境中的高效自主目标搜索系统",
        tags: ["#TargetSearch", "#UAV", "#RA-L"],
        link: "https://github.com/Robotics-STAR-Lab/STAR-Searcher",
        image: "assets/paper-previews/star-searcher.png"
      },
      {
        badge: "RA-L 2025",
        title: "Learning Humanoid Arm Motion",
        subtitle: "多智能体强化学习的人形臂运动学习",
        tags: ["#Humanoid", "#ReinforcementLearning", "#OpenSource"],
        link: "https://github.com/hojae-io/LearningHumanoidArmMotion-RAL2025-Code",
        image: "assets/paper-previews/humanoid-arm.png"
      }
    ],
    guideKicker: "RA-L Knowledge",
    guideTitle: "RA-L 投稿经验摘要（展示版）",
    guideIntro:
      "以下内容基于《RA-L 投稿攻略》提炼，仅用于经验分享展示，不替代官方指南。",
    guidePoints: [
      {
        title: "期刊定位",
        text: "RA-L 是机器人与自动化短期刊，强调真实机器人问题、紧凑贡献与可复现实验。"
      },
      {
        title: "流程节奏",
        text: "常见流程为初稿提交 -> Revise and Resubmit -> Final Version，需关注各阶段截止时间。"
      },
      {
        title: "初稿要点",
        text: "遵循匿名与篇幅规范（通常 8 页含参考文献），避免违规附录与不当链接。"
      },
      {
        title: "Rebuttal 策略",
        text: "按 reviewer comment 一对一回应，提交改动说明、标注稿与干净稿。"
      },
      {
        title: "Final 版本",
        text: "接受后需在期限内切换 IEEE trans 模板并补全作者信息与版权流程。"
      },
      {
        title: "Transfer 认知",
        text: "论文接受后可在 RAS 系统执行会议 transfer，需结合会议时间窗口规划。"
      }
    ],
    guideDeepTitle: "RA-L 投稿全流程拆解（图文版）",
    guideDeepIntro:
      "基于《RA-L 投稿攻略》整理成可执行流程：你可以直接按阶段推进、按清单自查、按坑位规避风险。🚀",
    guideFlowTitle: "流程图：从初稿到见刊与会议 Transfer",
    guideFlowTip: "建议每个节点至少预留 7-10 天缓冲，避免被截止时间反向驱动。⏱️",
    guideFocusLabel: "核心动作",
    guideDeliverablesLabel: "阶段产出",
    guideChecklistTitle: "提交清单（直接照着做）",
    guideChecklistIntro: "优先保证匿名规范、材料完整性和时间节点管理。",
    guidePitfallTitle: "高频坑位（能避则避）",
    guidePitfallIntro: "这些错误会显著增加 desk reject 或反复返工概率。",
    guideLinksTitle: "官方入口（建议收藏）",
    guideOpenLink: "打开链接",
    guidePhases: [
      {
        emoji: "🎯",
        stage: "阶段 1：选题与定位",
        window: "投稿前 2-6 周",
        focus: "从真实机器人问题切入，突出可落地贡献，不只讲 AI 指标。",
        deliverables: "题目、摘要、关键词、目标 EIC/AE 方向初步确定。",
        alert: "避免叙事脱离机器人场景。",
        progress: 16
      },
      {
        emoji: "📝",
        stage: "阶段 2：初稿提交",
        window: "Day 0",
        focus: "使用 IEEE conf 模板匿名投稿，控制篇幅与格式合规。",
        deliverables: "匿名稿件、封面信、关键词、可选视频/代码材料。",
        alert: "正文不要放暴露身份的网页链接。",
        progress: 32
      },
      {
        emoji: "📬",
        stage: "阶段 3：审稿等待",
        window: "约 2.5-3 个月",
        focus: "跟踪状态、准备补充实验，提前规划 R&R 资源。",
        deliverables: "潜在补实验脚本、图表更新预案。",
        alert: "不要等到 R&R 才开始补实验。",
        progress: 50
      },
      {
        emoji: "🛠️",
        stage: "阶段 4：R&R Rebuttal",
        window: "通常 30 天",
        focus: "对每个 reviewer comment one-by-one 回应并给证据。",
        deliverables: "response/statement、标注稿、干净稿、cover letter。",
        alert: "避免情绪化回复或跳答问题。",
        progress: 68
      },
      {
        emoji: "✅",
        stage: "阶段 5：Accept 与 Final",
        window: "Accept 后 14 天内",
        focus: "切换 IEEE trans 模板并补齐作者信息、版权流程。",
        deliverables: "camera-ready PDF + source、copyright、元信息校对。",
        alert: "参考文献尽量替换为正式出版条目。",
        progress: 84
      },
      {
        emoji: "📢",
        stage: "阶段 6：见刊与 Transfer",
        window: "Early Access -> 正式 issue",
        focus: "缴费后上线 early access，可结合会议窗口执行 transfer。",
        deliverables: "发表版本、会议 transfer 操作与注册规划。",
        alert: "transfer 时间窗错过就无法当年挂会。",
        progress: 100
      }
    ],
    guideFlow: [
      { emoji: "🧪", title: "选题定稿", note: "机器人问题驱动 + 贡献边界清晰" },
      { emoji: "📄", title: "Initial Submission", note: "匿名 conf 模板 + 8 页内合规" },
      { emoji: "📬", title: "Peer Review", note: "约 2.5-3 个月" },
      { emoji: "🛠️", title: "R&R 30 天", note: "逐条回应 + 双版本稿件" },
      { emoji: "✅", title: "Accept + Final 14 天", note: "trans 模板 + 版权流程" },
      { emoji: "🎤", title: "Early Access / Transfer", note: "见刊与会议窗口联动" }
    ],
    guideChecklist: [
      { emoji: "📌", text: "初稿使用 IEEE conference 模板，正文 + 参考文献通常不超过 8 页。" },
      { emoji: "🕵️", text: "匿名信息彻底检查：作者、致谢、项目主页、补充材料元数据都要排查。" },
      { emoji: "🧾", text: "准备 cover letter，明确贡献、应用场景与审稿匹配方向。" },
      { emoji: "🔑", text: "关键词选择要精准，决定后续 AE 与 reviewer 的匹配质量。" },
      { emoji: "🧪", text: "实验强调真实机器人问题和可复现证据，图表表达尽量直接。" },
      { emoji: "📁", text: "R&R 阶段一次性准备 response、标注稿、干净稿，避免漏传。" },
      { emoji: "📚", text: "Final 版本前校对参考文献，优先引用正式出版信息而非 arXiv 占位。" },
      { emoji: "📅", text: "accept 后立即倒排 final + transfer 时间，别等邮件提醒。" }
    ],
    guidePitfalls: [
      { emoji: "🚫", text: "正文直接放网页/视频链接导致匿名违规，存在 desk reject 风险。" },
      { emoji: "📏", text: "页面超限或格式越界（边框、字号、版芯）会导致提交失败。" },
      { emoji: "📎", text: "把 appendix 当主材料提交，不符合 RA-L 短文定位。" },
      { emoji: "😵", text: "Rebuttal 不逐条回应 reviewer，AE 很难判断修改充分性。" },
      { emoji: "⏰", text: "R&R 30 天和 Final 14 天准备不足，最后只能仓促提交。" },
      { emoji: "🧩", text: "模板切换后作者信息/致谢/thanks 区域遗漏，引发返修。" },
      { emoji: "💸", text: "超页费用与 OA 选项没有提前沟通，财务流程被动。" },
      { emoji: "🎯", text: "transfer 时间窗没盯住，accept 了也可能错过目标会议。" }
    ],
    guideLinks: [
      {
        emoji: "🌐",
        name: "RA-L 官方主页",
        desc: "Scope、流程入口、transfer 会议窗口",
        link: "https://www.ieee-ras.org/publications/ra-l/"
      },
      {
        emoji: "🧭",
        name: "RAS 投稿系统",
        desc: "初稿提交、R&R、final materials 都在这里",
        link: "https://ras.papercept.net/conferences/scripts/login.pl"
      },
      {
        emoji: "🧱",
        name: "Submission Procedures",
        desc: "官方分阶段操作说明（新稿/重投/final）",
        link: "https://www.ieee-ras.org/publications/ra-l/submission-procedures/"
      },
      {
        emoji: "✅",
        name: "Final Submission Checklist",
        desc: "camera-ready 核对清单与编辑要求",
        link: "https://www.ieee-ras.org/publications/ra-l/final-submission-checklist/"
      },
      {
        emoji: "📦",
        name: "IEEE Conf 模板",
        desc: "初稿阶段模板下载（anonymous）",
        link: "http://ras.papercept.net/conferences/support/files/ieeeconf.zip"
      },
      {
        emoji: "📘",
        name: "IEEE Trans 模板",
        desc: "accept 后 final 版本模板",
        link: "https://template-selector.ieee.org/secure/templateSelector/downloadTemplate?publicationTypeId=1&titleId=33&articleId=3&fileId=43"
      }
    ],
    guideAttributionTitle: "署名与来源",
    guideAttribution:
      "投稿经验内容参考《RA-L 投稿攻略》，作者：郝策，更新日期：2026年2月18日。请在转载或二次传播时保留作者署名与来源链接。",
    guideSourceLink: "查看原文（仓库文档）",
    roadmapKicker: "Roadmap",
    roadmapTitle: "三阶段发展路线",
    roadmap: [
      {
        stage: "阶段 1",
        title: "MVP 启动",
        text: "静态网站上线，完成首批论文/经验内容展示与社群冷启动。"
      },
      {
        stage: "阶段 2",
        title: "社区成长",
        text: "建设标签系统、贡献者机制与内容管理后台，提升活跃度。"
      },
      {
        stage: "阶段 3",
        title: "API 与服务化",
        text: "开放结构化数据接口，支持趋势分析与 Agent 调用场景。"
      }
    ],
    kpiKicker: "Milestones",
    kpiTitle: "启动阶段 KPI",
    kpis: [
      { label: "贡献者数量", value: "≥ 50" },
      { label: "每周投稿经验更新", value: "1 次" },
      { label: "首批结构化条目", value: "50+" },
      { label: "目标定位", value: "科研基础设施" }
    ],
    footerTitle: "Build The Entrance, Not Just Traffic",
    footerText:
      "RoboIndex 面向机器人科研长期价值建设，强调透明治理、开源协作与结构化知识资产。",
    footerProposal: "读取 proposal.md",
    footerGuide: "读取 RA-L 投稿攻略",
    footerGithub: "GitHub 主页",
    footerCredit:
      "RA-L 投稿经验相关内容署名：郝策（《RA-L 投稿攻略》，2026-02-18 更新）。"
  },
  en: {
    brand: "RoboIndex",
    navProposal: "Proposal",
    navFeatures: "Features",
    navRepos: "Open Papers",
    navGuide: "RA-L Guide",
    navRoadmap: "Roadmap",
    navKpis: "KPIs",
    heroEyebrow: "Agent Era Robotics Research Infrastructure",
    heroTitle: "A structured entry for robotics papers, code, and submission know-how",
    heroSubtitle:
      "RoboIndex connects paper indexing, open-source repositories, and submission experience into reusable research infrastructure.",
    heroCtaPrimary: "Read Proposal",
    heroCtaSecondary: "See RA-L Summary",
    heroStat1Title: "Launch Mode",
    heroStat1Text: "Start lean with static GitHub Pages and validate fast.",
    heroStat2Title: "Core Differentiator",
    heroStat2Text: "Paper index + submission experience + open-source aggregation + community interaction.",
    heroStat3Title: "Long-Term Asset",
    heroStat3Text: "Build searchable, callable, and extensible robotics research data.",
    proposalKicker: "Project Brief",
    proposalTitle: "Positioning And Vision",
    proposalIntro:
      "RoboIndex is an open community for robotics research and practical experience, bridging academic outputs and engineering execution.",
    proposalVisionTitle: "Core Belief",
    proposalVisionText:
      "In the agent era, writing is a core capability. Data assets and entry-point ownership define long-term impact.",
    proposalQuote:
      "Writing is the distilled skill of human intelligence in the agent era; data is the asset, and the entrance is the power.",
    proposalUsersTitle: "Target Users",
    users: [
      "PhD students and researchers",
      "Early-stage authors with limited submission experience",
      "Robotics engineers",
      "Lab-level research teams"
    ],
    problemKicker: "Market Opportunity",
    problemTitle: "Pain Points And Differentiation",
    painPoints: [
      {
        title: "Fragmented Information",
        text: "Papers, code, and submission insights live on disconnected platforms."
      },
      {
        title: "Weak Knowledge Retention",
        text: "High-value submission experience is rarely structured for reuse."
      },
      {
        title: "Limited Community Loop",
        text: "Academic discussion and engineering practice are not tightly linked."
      },
      {
        title: "No Unified Data Layer",
        text: "Without a standard schema, API and agent integrations are harder later."
      }
    ],
    tablePlatform: "Platform",
    tablePaperIndex: "Paper Index",
    tableSubmissionExp: "Submission Experience",
    tableOpenSourceAgg: "Open-Source Aggregation",
    tableCommunity: "Community Interaction",
    platforms: [
      {
        name: "Google Scholar",
        paperIndex: "yes",
        submissionExp: "no",
        openSourceAgg: "no",
        community: "no"
      },
      {
        name: "Academia.edu",
        paperIndex: "yes",
        submissionExp: "no",
        openSourceAgg: "no",
        community: "partial"
      },
      {
        name: "OpenReview",
        paperIndex: "yes",
        submissionExp: "no",
        openSourceAgg: "no",
        community: "no"
      },
      {
        name: "RoboIndex",
        paperIndex: "yes",
        submissionExp: "yes",
        openSourceAgg: "yes",
        community: "yes"
      }
    ],
    featuresKicker: "Product Design",
    featuresTitle: "Core Capabilities On The Launch Page",
    featureCards: [
      {
        title: "Structured Paper View",
        text: "Organize robotics papers by title, topic, code links, and key contributions."
      },
      {
        title: "Submission Experience Cards",
        text: "Capture timelines, rebuttal strategies, and practical publishing notes."
      },
      {
        title: "Open-Source Navigation",
        text: "Connect publication and implementation through a single entry path."
      },
      {
        title: "Community Contribution Loop",
        text: "Use pull requests and visible attribution to encourage quality input."
      },
      {
        title: "Reusable Data Model",
        text: "Lay foundations for search, analytics, recommendation, and API access."
      },
      {
        title: "Clear Ethical Boundary",
        text: "Focus on shared experience, not paid submission consulting."
      }
    ],
    reposKicker: "Open Source Papers",
    reposTitle: "Open Paper Cards (ICRA / IROS / RA-L)",
    reposIntro:
      "The feed now includes your official EquiMus repository plus selected papers from Prof. Hao Ce's homepage across ICRA, IROS, and RA-L with preview images.",
    repoCards: [
      {
        badge: "RA-L 2025",
        title: "EquiMus",
        subtitle: "Official repository for musculoskeletal robot modeling and simulation",
        tags: ["#EquiMus", "#Musculoskeletal", "#RA-L"],
        link: "https://github.com/fly-pigTH/EquiMus",
        image: "assets/paper-previews/equimus.png"
      },
      {
        badge: "ICRA 2024",
        title: "GAMMA",
        subtitle: "Generalizable Articulation Modeling and Manipulation (Hao Ce)",
        tags: ["#CeHao", "#ICRA", "#Articulation"],
        link: "https://sites.google.com/view/gamma-articulation",
        image: "assets/paper-previews/gamma.png",
        video: "assets/paper-previews/gamma.mp4"
      },
      {
        badge: "RA-L 2024 · IROS 2024",
        title: "Skill-Critic",
        subtitle: "Refining Learned Skills for Hierarchical Reinforcement Learning (Hao Ce)",
        tags: ["#CeHao", "#IROS", "#RA-L"],
        link: "https://sites.google.com/view/skill-critic",
        image: "assets/paper-previews/skill-critic.png",
        video: "assets/paper-previews/skill-critic.mp4"
      },
      {
        badge: "RA-L 2025 · ICRA 2026",
        title: "REBot",
        subtitle: "Reflexive Evasion Robot (Hao Ce)",
        tags: ["#CeHao", "#RA-L", "#Quadruped"],
        link: "https://rebot-2025.github.io/",
        image: "assets/paper-previews/rebot.png",
        video: "assets/paper-previews/rebot.mp4"
      },
      {
        badge: "IROS 2024",
        title: "RISE",
        subtitle: "3D perception policy for real-world robot imitation learning",
        tags: ["#ImitationLearning", "#3DPerception", "#Policy"],
        link: "https://github.com/rise-policy/RISE",
        image: "assets/paper-previews/rise.png"
      },
      {
        badge: "RA-L 2024",
        title: "STAR-Searcher",
        subtitle: "Autonomous target search in complex unknown environments",
        tags: ["#TargetSearch", "#UAV", "#RA-L"],
        link: "https://github.com/Robotics-STAR-Lab/STAR-Searcher",
        image: "assets/paper-previews/star-searcher.png"
      },
      {
        badge: "RA-L 2025",
        title: "Learning Humanoid Arm Motion",
        subtitle: "Multi-agent RL for humanoid arm control",
        tags: ["#Humanoid", "#ReinforcementLearning", "#OpenSource"],
        link: "https://github.com/hojae-io/LearningHumanoidArmMotion-RAL2025-Code",
        image: "assets/paper-previews/humanoid-arm.png"
      }
    ],
    guideKicker: "RA-L Knowledge",
    guideTitle: "RA-L Submission Guide Summary (Display Version)",
    guideIntro:
      "This section summarizes insights from the RA-L guide for sharing purposes and does not replace official IEEE-RAS instructions.",
    guidePoints: [
      {
        title: "Journal Positioning",
        text: "RA-L is a concise robotics and automation journal emphasizing practical robot problems and focused contributions."
      },
      {
        title: "Process Rhythm",
        text: "Typical flow: initial submission -> revise and resubmit -> final version, each with strict deadlines."
      },
      {
        title: "Initial Submission",
        text: "Follow anonymization and page-limit rules, and avoid non-compliant appendices or links."
      },
      {
        title: "Rebuttal Practice",
        text: "Respond point-by-point to each reviewer and provide clear change statements."
      },
      {
        title: "Final Materials",
        text: "Switch to IEEE trans template after acceptance and complete copyright workflow on time."
      },
      {
        title: "Conference Transfer",
        text: "After acceptance, transfer can be done in the RAS system within conference windows."
      }
    ],
    guideDeepTitle: "RA-L End-to-End Playbook (Visual Version)",
    guideDeepIntro:
      "The following expands the original guide into an execution-ready workflow with phases, flowchart, checklists, pitfalls, and official links. 🚀",
    guideFlowTitle: "Flowchart: from initial submission to publication and transfer",
    guideFlowTip: "Reserve at least 7-10 days of buffer before each deadline to reduce risk. ⏱️",
    guideFocusLabel: "Focus",
    guideDeliverablesLabel: "Deliverables",
    guideChecklistTitle: "Execution Checklist",
    guideChecklistIntro: "Prioritize anonymity compliance, complete materials, and timeline control.",
    guidePitfallTitle: "Frequent Pitfalls",
    guidePitfallIntro: "These mistakes often lead to desk rejection or repeated rework.",
    guideLinksTitle: "Official Entry Points",
    guideOpenLink: "Open Link",
    guidePhases: [
      {
        emoji: "🎯",
        stage: "Phase 1: Scope and Positioning",
        window: "2-6 weeks before submission",
        focus: "Start from a real robot problem and define contribution boundaries clearly.",
        deliverables: "Final title direction, abstract narrative, keywords, and AE fit.",
        alert: "Avoid AI-only storytelling detached from robotics context.",
        progress: 16
      },
      {
        emoji: "📝",
        stage: "Phase 2: Initial Submission",
        window: "Day 0",
        focus: "Use IEEE conf template, anonymize thoroughly, and keep format compliant.",
        deliverables: "Anonymous manuscript, cover letter, keywords, optional video/code.",
        alert: "Do not expose identity via links in the main paper.",
        progress: 32
      },
      {
        emoji: "📬",
        stage: "Phase 3: Review Window",
        window: "Around 2.5-3 months",
        focus: "Track status and prepare potential extra experiments in advance.",
        deliverables: "Contingency plan for new figures, ablations, and rewritten sections.",
        alert: "Do not wait until R&R to start additional experiments.",
        progress: 50
      },
      {
        emoji: "🛠️",
        stage: "Phase 4: R&R Rebuttal",
        window: "Usually 30 days",
        focus: "Respond one-by-one to every reviewer concern with concrete evidence.",
        deliverables: "Response statement, marked manuscript, clean manuscript, cover letter.",
        alert: "Avoid emotional replies or unanswered comments.",
        progress: 68
      },
      {
        emoji: "✅",
        stage: "Phase 5: Accept and Final",
        window: "Within 14 days after accept",
        focus: "Switch to IEEE trans template and complete all publication metadata.",
        deliverables: "Camera-ready PDF/source, copyright, metadata verification.",
        alert: "Replace placeholder citations with published references where possible.",
        progress: 84
      },
      {
        emoji: "📢",
        stage: "Phase 6: Publication and Transfer",
        window: "Early access to issue publication",
        focus: "Pay fees, confirm early access, and align transfer with conference windows.",
        deliverables: "Published version and transfer/registration execution plan.",
        alert: "Missing the transfer window can block the target conference cycle.",
        progress: 100
      }
    ],
    guideFlow: [
      { emoji: "🧪", title: "Problem Framing", note: "robotics-first story + clear novelty" },
      { emoji: "📄", title: "Initial Submission", note: "anonymous conf template + page compliance" },
      { emoji: "📬", title: "Peer Review", note: "typically 2.5-3 months" },
      { emoji: "🛠️", title: "R&R in 30 Days", note: "point-by-point response + dual manuscripts" },
      { emoji: "✅", title: "Final in 14 Days", note: "trans template + copyright workflow" },
      { emoji: "🎤", title: "Early Access / Transfer", note: "publication + conference linkage" }
    ],
    guideChecklist: [
      { emoji: "📌", text: "Use IEEE conference template for initial submission; keep content within RA-L limits." },
      { emoji: "🕵️", text: "Audit anonymity in authorship cues, acknowledgments, links, and metadata." },
      { emoji: "🧾", text: "Prepare a focused cover letter with contribution, scope fit, and impact context." },
      { emoji: "🔑", text: "Choose accurate keywords because they heavily affect reviewer matching." },
      { emoji: "🧪", text: "Prioritize practical robot evidence and reproducible experiment reporting." },
      { emoji: "📁", text: "For R&R, submit response statement, marked manuscript, and clean manuscript together." },
      { emoji: "📚", text: "Before final submission, update references from arXiv placeholders to published entries." },
      { emoji: "📅", text: "Back-schedule final and transfer immediately after accept notification." }
    ],
    guidePitfalls: [
      { emoji: "🚫", text: "Identity-revealing links in the manuscript can trigger desk rejection." },
      { emoji: "📏", text: "Format violations (overflow, margins, layout hacks) can block submission." },
      { emoji: "📎", text: "Treating appendix as required core material conflicts with RA-L short-paper style." },
      { emoji: "😵", text: "Skipping one-by-one rebuttal makes revision quality hard for AE to validate." },
      { emoji: "⏰", text: "Underestimating 30-day R&R or 14-day final windows leads to rushed quality loss." },
      { emoji: "🧩", text: "Template switch errors in author block/thanks/ack sections cause avoidable rework." },
      { emoji: "💸", text: "Late fee/OA decisions may disrupt financial and approval workflows." },
      { emoji: "🎯", text: "Ignoring transfer windows may miss conference presentation opportunities." }
    ],
    guideLinks: [
      {
        emoji: "🌐",
        name: "RA-L Main Page",
        desc: "Scope, policy, and transfer conference windows",
        link: "https://www.ieee-ras.org/publications/ra-l/"
      },
      {
        emoji: "🧭",
        name: "RAS Submission System",
        desc: "Initial, resubmission, and final materials portal",
        link: "https://ras.papercept.net/conferences/scripts/login.pl"
      },
      {
        emoji: "🧱",
        name: "Submission Procedures",
        desc: "Official step-by-step instructions per submission stage",
        link: "https://www.ieee-ras.org/publications/ra-l/submission-procedures/"
      },
      {
        emoji: "✅",
        name: "Final Submission Checklist",
        desc: "Camera-ready checklist and editor-facing requirements",
        link: "https://www.ieee-ras.org/publications/ra-l/final-submission-checklist/"
      },
      {
        emoji: "📦",
        name: "IEEE Conf Template",
        desc: "Template package for initial anonymous manuscript",
        link: "http://ras.papercept.net/conferences/support/files/ieeeconf.zip"
      },
      {
        emoji: "📘",
        name: "IEEE Trans Template",
        desc: "Template package for accepted final version",
        link: "https://template-selector.ieee.org/secure/templateSelector/downloadTemplate?publicationTypeId=1&titleId=33&articleId=3&fileId=43"
      }
    ],
    guideAttributionTitle: "Attribution",
    guideAttribution:
      "Submission experience content references 'RA-L 投稿攻略' by Hao Ce, updated on February 18, 2026. Please preserve attribution and source links when reusing the content.",
    guideSourceLink: "Open source document in repository",
    roadmapKicker: "Roadmap",
    roadmapTitle: "Three-Phase Development",
    roadmap: [
      {
        stage: "Phase 1",
        title: "MVP Launch",
        text: "Publish static site and seed early paper/experience content."
      },
      {
        stage: "Phase 2",
        title: "Community Growth",
        text: "Add tagging, contributor incentives, and content management workflows."
      },
      {
        stage: "Phase 3",
        title: "API And Service Layer",
        text: "Expose structured data APIs for trend analysis and agent integration."
      }
    ],
    kpiKicker: "Milestones",
    kpiTitle: "Launch KPIs",
    kpis: [
      { label: "Contributors", value: ">= 50" },
      { label: "Weekly experience updates", value: "1 / week" },
      { label: "Initial structured entries", value: "50+" },
      { label: "Target role", value: "Research Infrastructure" }
    ],
    footerTitle: "Build The Entrance, Not Just Traffic",
    footerText:
      "RoboIndex focuses on long-term robotics research value through transparent governance, open collaboration, and structured knowledge assets.",
    footerProposal: "Open proposal.md",
    footerGuide: "Open RA-L guide",
    footerGithub: "GitHub Home",
    footerCredit:
      "Attribution for RA-L-related content: Hao Ce ('RA-L 投稿攻略', updated 2026-02-18)."
  }
};

const statusLabel = {
  zh: { yes: "✔", partial: "部分", no: "✕" },
  en: { yes: "✔", partial: "Partial", no: "✕" }
};

function createCard(item) {
  const card = document.createElement("article");
  card.className = "soft-card";

  const title = document.createElement("h3");
  title.textContent = item.title;

  const text = document.createElement("p");
  text.textContent = item.text;

  card.append(title, text);
  return card;
}

function createGuidePhaseCard(item, labels) {
  const card = document.createElement("article");
  card.className = "guide-phase-card";

  const head = document.createElement("div");
  head.className = "guide-phase-head";

  const emoji = document.createElement("span");
  emoji.className = "guide-phase-emoji";
  emoji.textContent = item.emoji || "📘";

  const meta = document.createElement("div");
  meta.className = "guide-phase-meta";

  const stage = document.createElement("h3");
  stage.textContent = item.stage;

  const window = document.createElement("p");
  window.className = "guide-phase-window";
  window.textContent = item.window;

  meta.append(stage, window);
  head.append(emoji, meta);

  const focus = document.createElement("p");
  focus.className = "guide-phase-line";
  focus.textContent = `${labels.focus}: ${item.focus}`;

  const deliverables = document.createElement("p");
  deliverables.className = "guide-phase-line";
  deliverables.textContent = `${labels.deliverables}: ${item.deliverables}`;

  const alert = document.createElement("p");
  alert.className = "guide-phase-alert";
  alert.textContent = `⚠ ${item.alert}`;

  const meter = document.createElement("div");
  meter.className = "guide-phase-meter";

  const meterFill = document.createElement("span");
  const progress = Math.max(0, Math.min(100, Number(item.progress) || 0));
  meterFill.style.width = `${progress}%`;

  meter.appendChild(meterFill);
  card.append(head, focus, deliverables, alert, meter);
  return card;
}

function createGuideFlowNode(item) {
  const node = document.createElement("article");
  node.className = "guide-flow-node";
  node.setAttribute("role", "listitem");

  const emoji = document.createElement("span");
  emoji.className = "guide-flow-emoji";
  emoji.textContent = item.emoji || "➡";

  const title = document.createElement("h4");
  title.textContent = item.title;

  const note = document.createElement("p");
  note.textContent = item.note;

  node.append(emoji, title, note);
  return node;
}

function createEmojiItem(item) {
  const row = document.createElement("div");
  row.className = "emoji-item";

  const emoji = document.createElement("span");
  emoji.className = "emoji-item-icon";
  emoji.textContent = item.emoji || "•";

  const text = document.createElement("p");
  text.textContent = item.text;

  row.append(emoji, text);
  return row;
}

function createGuideLinkCard(item, linkLabel) {
  const card = document.createElement("a");
  card.className = "guide-link-card";
  card.href = item.link;
  card.target = "_blank";
  card.rel = "noreferrer";

  const top = document.createElement("div");
  top.className = "guide-link-top";

  const emoji = document.createElement("span");
  emoji.className = "guide-link-emoji";
  emoji.textContent = item.emoji || "🔗";

  const name = document.createElement("h4");
  name.textContent = item.name;

  top.append(emoji, name);

  const desc = document.createElement("p");
  desc.textContent = item.desc;

  const cta = document.createElement("span");
  cta.className = "guide-link-cta";
  cta.textContent = linkLabel;

  card.append(top, desc, cta);
  return card;
}

function createRepoCard(item) {
  const card = document.createElement("a");
  card.className = "xhs-card";
  card.href = item.link;
  card.target = "_blank";
  card.rel = "noreferrer";

  const cover = document.createElement("div");
  cover.className = "xhs-cover";
  let hasVisual = false;

  const attachImage = () => {
    if (!item.image) {
      return false;
    }
    const img = document.createElement("img");
    img.className = "xhs-cover-img";
    img.src = item.image;
    img.alt = `${item.title} preview`;
    img.loading = "lazy";
    img.referrerPolicy = "no-referrer";
    img.addEventListener("error", () => {
      img.remove();
      if (!cover.querySelector(".xhs-cover-video")) {
        cover.classList.add("no-image");
      }
    });
    cover.appendChild(img);
    return true;
  };

  if (item.video) {
    const video = document.createElement("video");
    video.className = "xhs-cover-video";
    video.src = item.video;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "metadata";
    if (item.image) {
      video.poster = item.image;
    }
    video.addEventListener("error", () => {
      video.remove();
      const imageAttached = attachImage();
      if (!imageAttached) {
        cover.classList.add("no-image");
      }
    });
    cover.appendChild(video);
    hasVisual = true;
  }

  if (!hasVisual) {
    hasVisual = attachImage();
  }
  if (!hasVisual) {
    cover.classList.add("no-image");
  }

  const coverContent = document.createElement("div");
  coverContent.className = "xhs-cover-content";

  const badge = document.createElement("span");
  badge.className = "xhs-badge";
  badge.textContent = item.badge;

  const arrow = document.createElement("span");
  arrow.className = "xhs-arrow";
  arrow.textContent = item.video ? "VIDEO" : "PAPER";

  coverContent.append(badge, arrow);
  cover.appendChild(coverContent);

  const body = document.createElement("div");
  body.className = "xhs-body";

  const title = document.createElement("h3");
  title.className = "xhs-title";
  title.textContent = item.title;

  const subtitle = document.createElement("p");
  subtitle.className = "xhs-subtitle";
  subtitle.textContent = item.subtitle;

  const tags = document.createElement("div");
  tags.className = "xhs-tags";
  item.tags.forEach((tag) => {
    const token = document.createElement("span");
    token.className = "xhs-tag";
    token.textContent = tag;
    tags.appendChild(token);
  });

  body.append(title, subtitle, tags);
  card.append(cover, body);
  return card;
}

function renderLanguage(lang) {
  const content = siteContent[lang] || siteContent.zh;
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (Object.prototype.hasOwnProperty.call(content, key)) {
      el.textContent = content[key];
    }
  });

  const userList = document.getElementById("user-list");
  userList.innerHTML = "";
  content.users.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    userList.appendChild(li);
  });

  const painGrid = document.getElementById("pain-grid");
  painGrid.innerHTML = "";
  content.painPoints.forEach((point) => painGrid.appendChild(createCard(point)));

  const platformTable = document.getElementById("platform-table");
  platformTable.innerHTML = "";
  content.platforms.forEach((platform) => {
    const tr = document.createElement("tr");
    const columns = [
      { value: platform.name, status: null },
      { value: statusLabel[lang][platform.paperIndex], status: platform.paperIndex },
      { value: statusLabel[lang][platform.submissionExp], status: platform.submissionExp },
      { value: statusLabel[lang][platform.openSourceAgg], status: platform.openSourceAgg },
      { value: statusLabel[lang][platform.community], status: platform.community }
    ];

    columns.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell.value;
      if (cell.status) {
        td.className = `status-${cell.status}`;
      }
      tr.appendChild(td);
    });

    platformTable.appendChild(tr);
  });

  const featureGrid = document.getElementById("feature-grid");
  featureGrid.innerHTML = "";
  content.featureCards.forEach((item) => featureGrid.appendChild(createCard(item)));

  const repoGrid = document.getElementById("repo-grid");
  repoGrid.innerHTML = "";
  content.repoCards.forEach((item) => repoGrid.appendChild(createRepoCard(item)));

  const guideGrid = document.getElementById("guide-grid");
  guideGrid.innerHTML = "";
  content.guidePoints.forEach((item) => guideGrid.appendChild(createCard(item)));

  const guidePhaseGrid = document.getElementById("guide-phase-grid");
  guidePhaseGrid.innerHTML = "";
  const phaseLabels = {
    focus: content.guideFocusLabel,
    deliverables: content.guideDeliverablesLabel
  };
  content.guidePhases.forEach((item) => {
    guidePhaseGrid.appendChild(createGuidePhaseCard(item, phaseLabels));
  });

  const guideFlow = document.getElementById("guide-flow");
  guideFlow.innerHTML = "";
  content.guideFlow.forEach((item, index) => {
    guideFlow.appendChild(createGuideFlowNode(item));
    if (index !== content.guideFlow.length - 1) {
      const arrow = document.createElement("span");
      arrow.className = "guide-flow-arrow";
      arrow.textContent = "➜";
      guideFlow.appendChild(arrow);
    }
  });

  const guideChecklist = document.getElementById("guide-checklist");
  guideChecklist.innerHTML = "";
  content.guideChecklist.forEach((item) => {
    guideChecklist.appendChild(createEmojiItem(item));
  });

  const guidePitfalls = document.getElementById("guide-pitfalls");
  guidePitfalls.innerHTML = "";
  content.guidePitfalls.forEach((item) => {
    guidePitfalls.appendChild(createEmojiItem(item));
  });

  const guideLinkGrid = document.getElementById("guide-link-grid");
  guideLinkGrid.innerHTML = "";
  content.guideLinks.forEach((item) => {
    guideLinkGrid.appendChild(createGuideLinkCard(item, content.guideOpenLink));
  });

  const roadmapList = document.getElementById("roadmap-list");
  roadmapList.innerHTML = "";
  content.roadmap.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "roadmap-item";

    const step = document.createElement("span");
    step.className = "roadmap-step";
    step.textContent = item.stage || String(index + 1);

    const title = document.createElement("h3");
    title.textContent = item.title;

    const text = document.createElement("p");
    text.textContent = item.text;

    card.append(step, title, text);
    roadmapList.appendChild(card);
  });

  const kpiGrid = document.getElementById("kpi-grid");
  kpiGrid.innerHTML = "";
  content.kpis.forEach((item) => {
    const card = document.createElement("article");
    card.className = "soft-card";

    const title = document.createElement("h3");
    title.textContent = item.label;

    const value = document.createElement("p");
    value.textContent = item.value;

    card.append(title, value);
    kpiGrid.appendChild(card);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function bindLanguageSwitch() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      renderLanguage(btn.dataset.lang);
    });
  });
}

function bindRevealAnimation() {
  const elements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  elements.forEach((el) => observer.observe(el));
}

bindLanguageSwitch();
bindRevealAnimation();
renderLanguage("zh");
