import { auth, functions } from './firebase-config.js';
import { httpsCallable } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-functions.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js';

class TikTokAnalyticsApp {
    constructor() {
        this.initializeApp();
        this.bindEvents();
        this.checkAuthState();
    }

    initializeApp() {
        console.log('🚀 Inicializando TikTok Analytics App...');
        
        this.elements = {
            connectButton: document.getElementById('connect-tiktok'),
            authSection: document.getElementById('auth-section'),
            loadingSection: document.getElementById('loading-section')
        };
    }

    bindEvents() {
        if (this.elements.connectButton) {
            this.elements.connectButton.addEventListener('click', () => {
                this.handleConnectTikTok();
            });
        }

        // Detectar callback de TikTok
        const urlParams = new URLSearchParams(window.location.search);
        const authCode = urlParams.get('code');
        const error = urlParams.get('error');

        if (authCode) {
            console.log('📱 Código de autorización detectado');
            this.handleTikTokCallback(authCode);
        } else if (error) {
            console.error('❌ Error en autorización:', error);
            this.showError('Error en la autorización de TikTok');
        }
    }

    checkAuthState() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('✅ Usuario autenticado:', user.uid);
            }
        });
    }

    async handleConnectTikTok() {
        try {
            console.log('🔄 Iniciando conexión con TikTok...');
            
            // Por ahora, mostrar mensaje de desarrollo
            this.showLoading();
            
            setTimeout(() => {
                alert('🚧 Función de TikTok en desarrollo!\n\n✅ Firebase está configurado\n✅ Hosting funcionando\n⏳ Próximo: Configurar TikTok API');
                this.hideLoading();
            }, 2000);

        } catch (error) {
            console.error('❌ Error:', error);
            this.hideLoading();
            this.showError('Error al conectar con TikTok');
        }
    }

    async handleTikTokCallback(code) {
        // Por implementar cuando tengamos las Cloud Functions
        console.log('TikTok callback:', code);
    }

    showLoading() {
        this.elements.authSection?.classList.add('hidden');
        this.elements.loadingSection?.classList.remove('hidden');
    }

    hideLoading() {
        this.elements.loadingSection?.classList.add('hidden');
        this.elements.authSection?.classList.remove('hidden');
    }

    showError(message) {
        console.error(message);
        alert(`❌ ${message}`);
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.tikTokApp = new TikTokAnalyticsApp();
});
