import { useState } from "react";

export default function ImageGalleryUpload() {
    const [images, setImages] = useState<{ file: File; url: string }[]>([]);

    // 📌 افزودن تصاویر جدید
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const newFiles = Array.from(e.target.files).map((file) => ({
            file,
            url: URL.createObjectURL(file),
        }));

        setImages((prev) => [...prev, ...newFiles]);
    };

    // 📌 حذف یک تصویر
    const handleRemove = (index: number) => {
        setImages((prev) => {
            const updated = [...prev];
            // آزاد کردن URL blob
            URL.revokeObjectURL(updated[index].url);
            updated.splice(index, 1);
            return updated;
        });
    };

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h3>📷 گالری تصاویر</h3>

            {/* انتخاب فایل‌ها */}
            <input type="file" accept="image/*" multiple onChange={handleFileChange} />

            {/* پیش‌نمایش */}
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginTop: "15px",
                }}
            >
                {images.map((img, index) => (
                    <div
                        key={index}
                        style={{
                            position: "relative",
                            width: "120px",
                            height: "120px",
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src={img.url}
                            alt={`preview-${index}`}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <button
                            type="button"
                            onClick={() => handleRemove(index)}
                            style={{
                                position: "absolute",
                                top: "5px",
                                right: "5px",
                                background: "rgba(0,0,0,0.6)",
                                color: "white",
                                border: "none",
                                borderRadius: "50%",
                                cursor: "pointer",
                                width: "24px",
                                height: "24px",
                            }}
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
