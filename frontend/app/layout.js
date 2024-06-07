import "@/app/global.css";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

export const metadata = {
    title: "Laravel",
};
const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="antialiased">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
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
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
