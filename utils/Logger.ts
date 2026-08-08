export class Logger {
    static info(message: string): void {
        console.log(`[INFO] ${new Date().toLocaleString()} : ${message}`);
    }

    static warn(message: string): void {
        console.warn(`[WARNING] ${new Date().toLocaleString()} : ${message}`);
    }

    static error(message: string): void {
        console.error(`[ERROR] ${new Date().toLocaleString()} : ${message}`);
    }

    static success(message: string): void {
        console.log(`✅ ${message}`);
    }
}
