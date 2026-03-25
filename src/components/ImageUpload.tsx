import React, { useRef, useState } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  onImagesChange: (images: string[]) => void;
  onFilesChange?: (files: File[]) => void;
  maxImages?: number;
  className?: string;
  initialImages?: string[];
}

interface ImageData {
  url: string;
  file?: File;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImagesChange,
  onFilesChange,
  maxImages = 10,
  className = "",
  initialImages = [],
}) => {
  const [uploadedImages, setUploadedImages] = useState<ImageData[]>(
    initialImages.map((url) => ({ url })),
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    setIsProcessing(true);
    const fileArray = Array.from(files);

    // Limit the number of images
    const availableSlots = maxImages - uploadedImages.length;
    const filesToProcess = fileArray.slice(0, availableSlots);

    let processedCount = 0;
    const newImagesList: ImageData[] = [];

    filesToProcess.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          if (result) {
            newImagesList.push({ url: result, file });
          }
          processedCount++;

          // Update state once all files are processed
          if (processedCount === filesToProcess.length) {
            const updatedImages = [...uploadedImages, ...newImagesList];
            setUploadedImages(updatedImages);
            onImagesChange(updatedImages.map((img) => img.url));
            if (onFilesChange) {
              onFilesChange(
                updatedImages.filter((img) => img.file).map((img) => img.file!),
              );
            }
            setIsProcessing(false);
          }
        };
        reader.readAsDataURL(file);
      } else {
        processedCount++;
        if (processedCount === filesToProcess.length) {
          const updatedImages = [...uploadedImages, ...newImagesList];
          setUploadedImages(updatedImages);
          onImagesChange(updatedImages.map((img) => img.url));
          if (onFilesChange) {
            onFilesChange(
              updatedImages.filter((img) => img.file).map((img) => img.file!),
            );
          }
          setIsProcessing(false);
        }
      }
    });

    // Clear the input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = uploadedImages.filter((_, i) => i !== index);
    setUploadedImages(updatedImages);
    onImagesChange(updatedImages.map((img) => img.url));
    if (onFilesChange) {
      onFilesChange(
        updatedImages.filter((img) => img.file).map((img) => img.file!),
      );
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Upload Area */}
      <div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        <Button
          type="button"
          variant="outline"
          onClick={handleUploadClick}
          disabled={uploadedImages.length >= maxImages || isProcessing}
          className="w-full h-24 border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors"
        >
          <div className="flex flex-col items-center">
            <Upload className="w-6 h-6 text-gray-400 mb-2" />
            <span className="text-sm text-gray-600">
              {isProcessing
                ? "Processing images..."
                : uploadedImages.length >= maxImages
                  ? `Maximum ${maxImages} images reached`
                  : "Click to upload images"}
            </span>
            <span className="text-xs text-gray-500 mt-1">
              PNG, JPG, GIF up to 10MB each
            </span>
          </div>
        </Button>
      </div>

      {/* Image Preview Grid */}
      {uploadedImages.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {uploadedImages.map((imageData, index) => (
            <div key={index} className="relative group">
              <div className="aspect-square rounded-lg overflow-hidden border">
                <img
                  src={imageData.url}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
              >
                <X className="w-3 h-3" />
              </button>
              <div className="absolute bottom-1 left-1 bg-black/50 text-white text-xs px-2 py-1 rounded">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Image Count */}
      <div className="text-sm text-gray-600">
        {uploadedImages.length} of {maxImages} images uploaded
      </div>
    </div>
  );
};

export default ImageUpload;
