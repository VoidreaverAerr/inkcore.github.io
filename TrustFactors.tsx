import { Card } from "@/components/aily/Card";

export default function TrustFactors() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* 质检报告 */}
      <Card className="p-6">
        <div className="flex items-start">
          <div className="bg-blue-100 p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium mb-1">正品保障</h3>
            <p className="text-sm text-gray-600">官方授权渠道，100%正品保证</p>
          </div>
        </div>
        <button className="mt-4 text-blue-600 text-sm font-medium flex items-center">
          查看质检报告
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </Card>
      
      {/* 物流时效 */}
      <Card className="p-6">
        <div className="flex items-start">
          <div className="bg-green-100 p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 7h-3V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4h3c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 8h-2v2c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v2h2v10z" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium mb-1">物流时效</h3>
            <p className="text-sm text-gray-600">预计送达时间</p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>当日达</span>
            <span className="font-medium">¥25</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>次日达</span>
            <span className="font-medium">¥12</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>标准配送</span>
            <span className="font-medium">免运费</span>
          </div>
        </div>
      </Card>
      
      {/* 退货保障 */}
      <Card className="p-6">
        <div className="flex items-start">
          <div className="bg-purple-100 p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.76.96-4.6 2.05l1.23 1.23c.57-.89 1.38-1.53 2.37-1.53.69 0 1.31.28 1.77.74l1.41-1.41c-.95-.94-2.2-1.46-3.55-1.34-.43.02-.85.12-1.23.3l1.85 1.85c.26-.09.53-.14.81-.14 1.65 0 3 1.35 3 3 0 .91-.41 1.72-1.06 2.28l-1.5-1.5c.17-.46.26-.94.26-1.44 0-1.38-.97-2.56-2.32-2.89z" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium mb-1">无忧退货</h3>
            <p className="text-sm text-gray-600">7天无理由退货</p>
          </div>
        </div>
        <div className="mt-4 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
          <p className="text-sm text-yellow-700">
            <span className="font-medium">重要提示：</span>
            激活后不支持无理由退货
          </p>
        </div>
      </Card>
    </div>
  );
}