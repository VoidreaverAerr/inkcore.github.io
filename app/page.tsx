import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import TrustFactors from "@/components/TrustFactors";
import CrossSelling from "@/components/CrossSelling";

export default function IPhoneProductPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 商品展示区 */}
      <section className="mb-12">
        <h2 className="sr-only">商品展示</h2>
        <ProductGallery />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* 核心信息架构 */}
          <section className="mb-12">
            <h2 className="sr-only">产品信息</h2>
            <ProductInfo />
          </section>

          {/* 增强信任模块 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">购物保障</h2>
            <TrustFactors />
          </section>
        </div>

        <div>
          {/* 交叉销售建议 */}
          <section>
            <h2 className="text-2xl font-bold mb-6">搭配推荐</h2>
            <CrossSelling />
          </section>
        </div>
      </div>
    </div>
  );
}