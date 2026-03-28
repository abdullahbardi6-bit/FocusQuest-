// src/js/storage.js

class StorageManager {
    constructor() {
        this.stateKey = 'focusQuestState';
    }

    // Save state to localStorage
    saveState(state) {
        localStorage.setItem(this.stateKey, JSON.stringify(state));
    }

    // Load state from localStorage
    loadState() {
        const state = localStorage.getItem(this.stateKey);
        return state ? JSON.parse(state) : null;
    }

    // Export data to a JSON file
    exportData() {
        const state = this.loadState();
        if (state) {
            const dataStr = JSON.stringify(state, null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'focusQuestData.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } else {
            console.warn('No data available to export.');
        }
    }
}

// Usage Example
// const storageManager = new StorageManager();
// storageManager.saveState({ tasks: [] });
// const currentState = storageManager.loadState();
// storageManager.exportData();
