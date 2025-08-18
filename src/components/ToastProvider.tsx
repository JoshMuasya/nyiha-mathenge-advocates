"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
          color: "hsl(var(--primary-foreground))",
          border: "1px solid hsl(var(--primary-light))",
          borderRadius: "var(--radius)",
          boxShadow: "var(--shadow-medium)",
        },
        success: {
          style: {
            background: "hsl(var(--primary-light))",
            color: "hsl(var(--primary-foreground))",
            fontWeight: "bold",
          },
          iconTheme: {
            primary: "hsl(var(--primary-foreground))",
            secondary: "hsl(var(--primary-light))",
          },
        },
        error: {
          style: {
            background: "hsl(var(--destructive))",
            color: "hsl(var(--destructive-foreground))",
            fontWeight: "bold",
          },
          iconTheme: {
            primary: "hsl(var(--destructive-foreground))",
            secondary: "hsl(var(--destructive))",
          },
        },
      }}
    />
  );
}
