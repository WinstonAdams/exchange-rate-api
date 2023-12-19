# Exchange Rate API

## 介紹

提供開發者串接匯率轉換功能的 API，接收特定的 request，並回傳特定 JSON 格式的 response

## 開始使用

1. 請先確認有安裝 Node.js 、 npm 與 nodemon
2. 開啟終端機，到欲存放專案的路徑下，將專案 clone 到本地，輸入：

   ```bash
   git clone https://github.com/WinstonAdams/exchange-rate-api.git
   ```
   
3. 安裝相關套件，輸入：

   ```bash
   npm install
   ```

4. 新增 .env 檔案，設定環境變數，詳細內容可參考 .env.example

5. 執行專案，輸入：

   ```bash
   npm run dev
   ```

6. 在終端機看見以下訊息代表順利執行

   ```bash
   App is listening on http://localhost:3000
   ```

7. Request 必須包含查詢字串(參數) source 、 target 與 amount，其中 source 與 target 為貨幣代碼，分別代表轉換前的貨幣與轉換後的貨幣，如： TWD 、 JPY 與 USD ； amount 為金額

   範例：
   
   ```URL
   ?source=USD&target=JPY&amount=$1,525
   ```
   
   Response 為 JSON 格式，範例：

   ```JSON
   {
    "msg": "success"
    "amount": "$170,496.53"
   }
   ```

8. 終止伺服器
    
   ```bash
   ctrl + c
   ```

## 開發工具

- Node.js - 執行環境
- Express - Web 應用程式後端框架
- Dotenv - 設定環境變數套件
- ESLint - 定義程式碼風格套件
