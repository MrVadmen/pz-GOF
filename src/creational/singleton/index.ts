class CommandCenterConnection {
    private static instance: CommandCenterConnection;
    private constructor() { console.log('Встановлено нове зєднання з Командним Пунктом...'); }
    public static getInstance(): CommandCenterConnection {
        if (!CommandCenterConnection.instance) CommandCenterConnection.instance = new CommandCenterConnection();
        return CommandCenterConnection.instance;
    }
    public sendReport(data: string) { console.log('[Відправка] Дані: ' + data); }
}
console.log('=== SINGLETON ===');
const c1 = CommandCenterConnection.getInstance(); c1.sendReport('Звіт Альфа');
const c2 = CommandCenterConnection.getInstance(); c2.sendReport('Звіт Бета');
console.log('Чи це одне й те саме зєднання? ' + (c1 === c2) + '\n');
