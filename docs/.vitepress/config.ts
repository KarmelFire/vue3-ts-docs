import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: "Vue 3 + TypeScript 学习文档",
    description: "详细学习Vue 3 和 TypeScript 的指南",
    themeConfig: {
        siteTitle: "前端学习",
        logo: "https://www.helloimg.com/i/2024/10/08/6705233b7f73f.jpg",
        nav: [
            { text: "首页", link: "/" },
            { text: "指南", link: "/guide/" },
            { text: "组件", link: "/components/" },
            { text: "API 参考", link: "/api/" },
            { text: "常见问题", link: "/faq/" },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/KarmelFire/vue3-ts-docs" },
        ],
        sidebar: {
            "/guide/": [
                {
                    text: "开始",
                    collapsible: true,  // 确保这里的 `collapsible` 在 VitePress 1.x 中被支持
                    items: [
                        { text: "介绍", link: "/guide/" },
                        { text: "安装", link: "/guide/installation" },
                        { text: "基本概念", link: "/guide/concepts" },
                    ],
                },
            ],
            "/components/": [
                {
                    text: "常用组件",
                    collapsible: true,  // 推荐为所有组添加 `collapsible`
                    items: [
                        { text: "介绍", link: "/components/" },
                        { text: "按钮 Button", link: "/components/button" },
                        { text: "表单 Form", link: "/components/form" },
                        { text: "表格 Table", link: "/components/table" },
                    ],
                },
            ],
        },
        footer: {
            message: "用心学习 Vue 3 与 TypeScript",
            copyright: "Copyright© 2024 mqxu",
        },
    }
})
