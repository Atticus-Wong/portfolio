"use client";

import React from 'react';
import ArticleLayout from './ArticleLayout';
import PasswordProtection from './PasswordProtection';

export default function ProtectedArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <PasswordProtection>
      <ArticleLayout>{children}</ArticleLayout>
    </PasswordProtection>
  );
}
