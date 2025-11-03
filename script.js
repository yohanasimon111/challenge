class DeepSeekChatbot {
    constructor() {
        // 🔑 **PASTE YOUR DEEPSEEK API KEY HERE**
        this.apiKey = 'YOUR_DEEPSEEK_API_KEY_HERE';  // ← REPLACE THIS LINE
        this.apiUrl = 'https://api.deepseek.com/v1/chat/completions';
        this.conversationHistory = [];
        this.isProcessing = false;
        
        this.initializeElements();
        this.attachEventListeners();
    }
}
// ✅ CORRECT:
this.apiKey = 'dsk_1234567890abcdefghijklmnopQRSTUVWXYZ';

// ❌ WRONG (no quotes):
this.apiKey = dsk_1234567890abcdefghijklmnopQRSTUVWXYZ;

// ❌ WRONG (extra spaces):
this.apiKey = ' dsk_1234567890abcdefghijklmnopQRSTUVWXYZ ';