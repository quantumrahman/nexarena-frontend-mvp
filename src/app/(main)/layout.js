import "../globals.css";

export default function MainLayout({ children }) {
    return (
        <main className="flex min-h-screen w-full flex-col justify-between">
            {children}
        </main>
    );
}
