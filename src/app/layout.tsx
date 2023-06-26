import '@/styles/globals.css';
import StyledComponentsRegistry from '@/lib/StyledComponentProvider';
import ReactQueryProvider from '@/lib/ReactQueryProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
