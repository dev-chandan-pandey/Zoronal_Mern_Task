// import type { Metadata } from "next";
// import "./globals.css";

// import QueryProvider from "@/providers/QueryProvider";

// export const metadata: Metadata = {
//   title: "Review & Rate",
//   description: "Company Review Platform",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className="bg-[#f7f7f7]">
//         <QueryProvider>
//           {children}
//         </QueryProvider>
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import "./globals.css";

import QueryProvider from "@/providers/QueryProvider";

import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Review & Rate",
  description: "Company Review Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f7f7f7]">

        <QueryProvider>
          {children}

          <Toaster
            richColors
            position="top-right"
          />
        </QueryProvider>

      </body>
    </html>
  );
}