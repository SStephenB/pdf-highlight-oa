// pages/api/convertPdfToImages.ts
import { NextApiRequest, NextApiResponse } from "next";
import pdfToImg from "pdf-img-convert";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Check if pdfUrl is provided in the request body
    const { pdfUrl } = req.body;
    if (!pdfUrl) {
      return res.status(400).json({ error: "pdfUrl is required in the request body" });
    }

    // Convert PDF to images
    const images = await pdfToImg.convert(pdfUrl);

    // Return the images as a response
    res.status(200).json(images);
  } catch (error) {
    console.error("Error converting PDF to images:", error);
    res.status(500).json({
      error: "Failed to convert PDF to images",
      details: error.message,
    });
  }
};
