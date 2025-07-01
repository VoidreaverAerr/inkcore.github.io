import { Card } from "@/components/aily/Card";
import { Image } from "@/components/aily/Image";

export default function CrossSelling() {
  // 配件搭配推荐
  const accessories = [
    {
      id: 1,
      name: 'MagSafe充电器',
      price: 329,
      discount: true,
      matchScore: 95, // 匹配度（基于用户浏览历史）
    },
    {
      id: 2,
      name: 'AirPods Pro',
      price: 1499,
      discount: true,
      matchScore: 85,
    },
    {
      id: 3,
      name: '硅胶保护壳',
      price: 399,
      discount: false,
      matchScore: 92,
    },
  ];
  
  // 场景化捆绑销售
  const bundles = [
    {
      id: 1,
      name: '商务精英套装',
      items: ['iPhone 15 Pro Max', 'Apple Watch', 'AirPods Pro'],
      originalPrice: 12998,
      bundlePrice: 11499,
      discount: 11,
    },
    {
      id: 2,
      name: '家庭娱乐套装',
      items: ['iPhone 15 Pro Max', 'iPad Air', 'Apple TV'],
      originalPrice: 14997,
      bundlePrice: 12999,
      discount: 13,
    },
  ];

  return (
    <div className="space-y-6">
      {/* 配件搭配推荐 */}
      <div>
        <h3 className="font-medium mb-3">配件搭配</h3>
        <div className="space-y-4">
          {accessories.map(accessory => (
            <Card key={accessory.id} className="p-4 flex items-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-4">
                <Image query="iPhone accessory" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1">
                <div className="font-medium">{accessory.name}</div>
                <div className="flex items-baseline mt-1">
                  <span className="text-red-600 font-medium">¥{accessory.price}</span>
                  {accessory.discount && (
                    <span className="ml-2 text-xs bg-red-100 text-red-800 px-1.5 py-0.5 rounded">搭配价</span>
                  )}
                </div>
              </div>
              <button className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm">
                添加
              </button>
            </Card>
          ))}
        </div>
      </div>
      
      {/* 场景化捆绑销售 */}
      <div>
        <h3 className="font-medium mb-3">套装优惠</h3>
        <div className="space-y-4">
          {bundles.map(bundle => (
            <Card key={bundle.id} className="p-4">
              <div className="font-medium text-lg mb-2">{bundle.name}</div>
              
              <div className="flex mb-3">
                {bundle.items.map((item, index) => (
                  <div key={index} className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden mr-2">
                    <Image query="Apple product" className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-red-600 font-medium text-lg">¥{bundle.bundlePrice.toLocaleString()}</span>
                  <span className="ml-2 text-gray-500 line-through text-sm">¥{bundle.originalPrice.toLocaleString()}</span>
                </div>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                  立省 {bundle.discount}%
                </span>
              </div>
              
              <button className="w-full mt-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 rounded-lg">
                查看套装详情
              </button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}