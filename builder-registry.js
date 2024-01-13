"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Pdfuploader from "./components/Pdfuploader/Pdfuploader";

Builder.registerComponent(Counter, {
  name: "Counter",
});

Builder.registerComponent(Pdfuploader, {
  name: "Pdfuploader",
});
