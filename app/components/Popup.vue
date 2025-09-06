<!-- components/SimplePopup.vue -->
<template>
    <div class="popup-overlay" @click="handleOverlayClick">
        <div class="popup-box" @click.stop :class="`popup-${type}`">
            <!-- Header -->
            <div class="popup-header">
                <div class="popup-icon">
                    <span v-if="type === 'error'">❌</span>
                    <span v-else-if="type === 'success'">✅</span>
                    <span v-else-if="type === 'warning'">⚠️</span>
                    <span v-else>ℹ️</span>
                </div>
                <h3 class="popup-title">{{ title }}</h3>
                <button @click="closePopup" class="popup-close">×</button>
            </div>

            <!-- Content -->
            <div class="popup-content">
                <slot>
                    <p>{{ message }}</p>
                </slot>
            </div>

            <!-- Footer -->
            <div class="popup-footer">
                <button v-if="showCancel" @click="cancelPopup" class="popup-btn btn-cancel">
                    {{ cancelText }}
                </button>
                <button @click="confirmPopup" class="popup-btn" :class="`btn-${type}`">
                    {{ confirmText }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    type?: 'error' | 'success' | 'warning' | 'info'
    title: string
    message?: string
    confirmText?: string
    cancelText?: string
    showCancel?: boolean
    closeOnOverlay?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    type: 'info',
    message: '',
    confirmText: 'ตกลง',
    cancelText: 'ยกเลิก',
    showCancel: false,
    closeOnOverlay: true
})

const emit = defineEmits<{
    close: []
    confirm: []
    cancel: []
}>()

const closePopup = () => {
    emit('close')
}

const confirmPopup = () => {
    emit('confirm')
    emit('close')
}

const cancelPopup = () => {
    emit('cancel')
    emit('close')
}

const handleOverlayClick = () => {
    if (props.closeOnOverlay) {
        closePopup()
    }
}

// Auto focus on confirm button when mounted
onMounted(() => {
    const confirmBtn = document.querySelector('.btn-' + props.type) as HTMLElement
    if (confirmBtn) {
        confirmBtn.focus()
    }
})

// Handle ESC key
onMounted(() => {
    const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closePopup()
        }
    }
    document.addEventListener('keydown', handleEscape)

    onUnmounted(() => {
        document.removeEventListener('keydown', handleEscape)
    })
})
</script>

<style scoped>
/* Popup Overlay */
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: fadeIn 0.2s ease-out;
    backdrop-filter: blur(2px);
}

/* Popup Box */
.popup-box {
    background: white;
    border-radius: 12px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
    min-width: 320px;
    max-width: 500px;
    width: 90%;
    max-height: 80vh;
    overflow: hidden;
    animation: slideIn 0.3s ease-out;
}

/* Popup Header */
.popup-header {
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #e5e7eb;
    gap: 12px;
    background: #fafafa;
}

.popup-icon {
    font-size: 24px;
    flex-shrink: 0;
}

.popup-title {
    flex: 1;
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #1f2937;
}

.popup-close {
    background: none;
    border: none;
    font-size: 28px;
    cursor: pointer;
    color: #6b7280;
    padding: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s;
    flex-shrink: 0;
}

.popup-close:hover {
    background: #f3f4f6;
    color: #374151;
    transform: scale(1.1);
}

/* Popup Content */
.popup-content {
    padding: 24px;
    color: #4b5563;
    line-height: 1.6;
    font-size: 16px;
}

.popup-content :deep(p) {
    margin: 0 0 12px 0;
}

.popup-content :deep(p:last-child) {
    margin-bottom: 0;
}

/* Popup Footer */
.popup-footer {
    padding: 20px 24px;
    border-top: 1px solid #e5e7eb;
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    background: #fafafa;
}

.popup-btn {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 14px;
    min-width: 80px;
}

.popup-btn:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
}

.btn-cancel {
    background: #f3f4f6;
    color: #6b7280;
}

.btn-cancel:hover {
    background: #e5e7eb;
    color: #374151;
}

.btn-error {
    background: #ef4444;
    color: white;
}

.btn-error:hover {
    background: #dc2626;
}

.btn-success {
    background: #10b981;
    color: white;
}

.btn-success:hover {
    background: #059669;
}

.btn-warning {
    background: #f59e0b;
    color: white;
}

.btn-warning:hover {
    background: #d97706;
}

.btn-info {
    background: #3b82f6;
    color: white;
}

.btn-info:hover {
    background: #2563eb;
}

/* Color Variants */
.popup-error .popup-title {
    color: #dc2626;
}

.popup-error .popup-header {
    background: #fef2f2;
    border-color: #fecaca;
}

.popup-success .popup-title {
    color: #059669;
}

.popup-success .popup-header {
    background: #f0fdf4;
    border-color: #bbf7d0;
}

.popup-warning .popup-title {
    color: #d97706;
}

.popup-warning .popup-header {
    background: #fffbeb;
    border-color: #fed7aa;
}

.popup-info .popup-title {
    color: #2563eb;
}

.popup-info .popup-header {
    background: #eff6ff;
    border-color: #bfdbfe;
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-30px) scale(0.9);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

/* Responsive */
@media (max-width: 480px) {
    .popup-box {
        min-width: 280px;
        width: 95%;
        margin: 20px;
    }

    .popup-header {
        padding: 16px;
    }

    .popup-content {
        padding: 20px 16px;
        font-size: 15px;
    }

    .popup-footer {
        padding: 16px;
        flex-direction: column-reverse;
    }

    .popup-btn {
        width: 100%;
    }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
    .popup-box {
        background: #1f2937;
        color: #f9fafb;
    }

    .popup-header,
    .popup-footer {
        background: #374151;
        border-color: #4b5563;
    }

    .popup-title {
        color: #f9fafb;
    }

    .popup-content {
        color: #d1d5db;
    }

    .popup-close {
        color: #9ca3af;
    }

    .popup-close:hover {
        background: #4b5563;
        color: #f3f4f6;
    }
}
</style>