// ⚙️ 網站內容設定檔 (支援資料夾版)

const CONFIG = {
    // 1. 網頁標題
    pageTitle: "雲端資料庫",

    // 2. 檔案與資料夾清單
    items: [
        // --- 範例：這是一個單獨的檔案 (沒有放在資料夾裡) ---
        {
            type: "file",  // 設定為檔案
            name: "課程總大綱.pdf",
            path: "file/syllabus.pdf",
            note: "全學期適用",
            icon: "📄"
        },

        // --- 範例：這是一個資料夾 (裡面放檔案) ---
        {
            type: "folder", // 設定為資料夾
            name: "第一章：基礎觀念",
            isOpen: true,   // 預設是否展開 (true=展開, false=收合)
            children: [     // children 裡面放這個資料夾的檔案
                {
                    type: "file",
                    name: "1-1 基礎教學講義",
                    path: "file/ch1-1.pdf",
                    note: "必讀教材",
                    icon: "📄"
                },
                {
                    type: "file",
                    name: "1-2 補充圖片",
                    path: "file/img01.jpg",
                    note: "參考用",
                    icon: "🖼️"
                }
            ]
        },

        // --- 範例：這是第二個資料夾 ---
        {
            type: "folder",
            name: "第二章：進階應用",
            isOpen: false, // 預設收起來
            children: [
                {
                    type: "file",
                    name: "2-1 進階講義",
                    path: "file/ch2-1.pdf",
                    note: "難度較高",
                    icon: "📄"
                }
            ]
        },
                {
            type: "folder",
            name: "測試",
            children: [
                // 在這裡貼上該資料夾內的檔案...
            ]
        },
    ]
};
