import "@/app/global.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import Providers from "@/components/Providers";

export const metadata = {
    title: "Laravel",
};
const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="bg-red-200">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Providers>
                        {children}
                        <Toaster
                            position="bottom-right"
                            gutter={12}
                            containerStyle={{ margin: "8px" }}
                            toastOptions={{
                                success: {
                                    duration: 3000,
                                },
                                error: {
                                    duration: 5000,
                                },
                                style: {
                                    fontSize: "16px",
                                    maxWidth: "500px",
                                    padding: "16px 24px",
                                    backgroundColor: "var(--color-grey-0)",
                                    color: "var(--color-grey-700)",
                                },
                            }}
                        />
                    </Providers>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
