import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkUnwrapImages from "remark-unwrap-images";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkUnwrapImages],
  },
});

export default withMDX(nextConfig);
