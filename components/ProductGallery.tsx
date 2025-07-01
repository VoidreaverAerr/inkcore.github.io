import { useState } from 'react';
import { Image } from "@/components/aily/Image";

export default function ProductGallery() {
  // 模拟8张产品图片（实际应用中从API获取）
  const images = Array(8).fill(0).map((_, i) => ({
    id: i,
    type: i < 4 ? 'image' : 'video', // 前4张为图片，后4张为视频
    alt: `iPhone 产品图 ${i+1}`,
  }));

  const [activeIndex, setActiveIndex] = useState(0);
  const [show3DViewer, setShow3DViewer] = useState(false);

  return (
    <div className="relative">
      {/* 主图展示区 */}
      <div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-square">
        {images[activeIndex].type === 'image' ? (
          <Image 
            query="iPhone product image" 
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-black">
            <div className="text-white text-center">
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p>产品视频展示</p>
            </div>
          </div>
        )}
        
        {/* 3D查看按钮 */}
        <button 
          onClick={() => setShow3DViewer(true)}
          className="absolute bottom-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 px-4 py-2 rounded-full flex items-center shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-8c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z" />
          </svg>
          3D查看
        </button>
      </div>

      {/* 缩略图导航 */}
      <div className="mt-4 flex overflow-x-auto pb-2 space-x-2">
        {images.map((img, index) => (
          <button
            key={img.id}
            onClick={() => setActiveIndex(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition ${
              activeIndex === index 
                ? 'border-blue-600' 
                : 'border-transparent hover:border-gray-300'
            }`}
          >
            {img.type === 'image' ? (
              <Image 
                query="iPhone thumbnail" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* 3D查看器模态框 */}
      {show3DViewer && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="relative bg-white rounded-lg w-5/6 h-5/6">
            <button 
              onClick={() => setShow3DViewer(false)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-xl">iPhone 3D交互展示</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}