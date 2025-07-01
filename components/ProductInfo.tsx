import { useState } from 'react';
import { ProgressBar } from "@/components/aily/ProgressBar";

export default function ProductInfo() {
  const [selectedColor, setSelectedColor] = useState('深空灰');
  const [selectedStorage, setSelectedStorage] = useState('256GB');
  
  // 价格信息
  const originalPrice = 8999;
  const salePrice = 7999;
  
  // 倒计时（24小时）
  const countdownHours = 12;
  const countdownMinutes = 30;
  
  // 库存状态
  const stockStatus = {
    '深空灰': { '128GB': 20, '256GB': 15, '512GB': 5 },
    '银色': { '128GB': 15, '256GB': 8, '512GB': 2 },
    '金色': { '128GB': 10, '256GB': 3, '512GB': 0 },
  };
  
  const currentStock = stockStatus[selectedColor][selectedStorage];
  const stockPercentage = Math.min(100, (currentStock / 20) * 100);
  
  return (
    <div>
      {/* 标题 - 响应式显示 */}
      <h1 className="text-3xl font-bold mb-2">
        <span className="hidden md:inline">Apple iPhone 15 Pro Max</span>
        <span className="md:hidden">iPhone 15 Pro Max</span>
      </h1>
      <p className="text-gray-600 mb-6">A17 Pro芯片 | 6.7英寸超视网膜XDR显示屏 | 4800万像素主摄</p>
      
      {/* 价格展示 */}
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-red-600">¥{salePrice.toLocaleString()}</span>
          <span className="ml-3 text-gray-500 line-through">¥{originalPrice.toLocaleString()}</span>
          <span className="ml-3 bg-red-100 text-red-800 text-sm px-2 py-1 rounded">限时优惠</span>
        </div>
        
        {/* 倒计时 */}
        <div className="mt-2 flex items-center text-sm text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
          </svg>
          优惠倒计时: {countdownHours}小时{countdownMinutes}分
        </div>
      </div>
      
      {/* 颜色选择 */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">颜色</h3>
        <div className="flex space-x-3">
          {['深空灰', '银色', '金色'].map(color => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`px-4 py-2 rounded-full border ${
                selectedColor === color
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
      
      {/* 存储容量选择 */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">存储容量</h3>
        <div className="grid grid-cols-3 gap-3">
          {['128GB', '256GB', '512GB'].map(size => {
            const stock = stockStatus[selectedColor][size];
            return (
              <button
                key={size}
                onClick={() => setSelectedStorage(size)}
                disabled={stock === 0}
                className={`px-4 py-3 rounded-lg border text-center ${
                  selectedStorage === size
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-300 hover:bg-gray-50'
                } ${
                  stock === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <div>{size}</div>
                {stock === 0 && (
                  <div className="text-xs text-red-500 mt-1">缺货</div>
                )}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* 库存状态可视化 */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-1">
          <span>库存状态</span>
          <span className="font-medium">
            {currentStock > 0 ? `剩余 ${currentStock} 件` : '已售罄'}
          </span>
        </div>
        <ProgressBar 
          value={stockPercentage} 
          className="h-2"
          color={currentStock > 5 ? 'green' : currentStock > 0 ? 'yellow' : 'red'}
        />
        <div className="text-xs text-gray-500 mt-1">
          {currentStock > 10 
            ? '库存充足' 
            : currentStock > 0 
              ? '库存紧张' 
              : '暂时缺货'}
        </div>
      </div>
      
      {/* 加入购物车按钮 */}
      <button 
        disabled={currentStock === 0}
        className={`w-full py-3 rounded-lg font-medium ${
          currentStock > 0
            ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {currentStock > 0 ? '加入购物车' : '暂时缺货'}
      </button>
    </div>
  );
}