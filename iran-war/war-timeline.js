// Auto-generate day links and manage timeline
const WarTimeline = {
    startDate: new Date('2026-03-04'),
    currentDay: 31,
    
    getDateForDay(dayNumber) {
        const date = new Date(this.startDate);
        date.setDate(date.getDate() + dayNumber - 1);
        return date;
    },
    
    formatDate(date) {
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            year: 'numeric'
        });
    },
    
    generateDayLinks() {
        const container = document.querySelector('.timeline-nav');
        if (!container) return;
        
        let html = '';
        for (let i = 1; i <= this.currentDay; i++) {
            const date = this.getDateForDay(i);
            const dateStr = this.formatDate(date);
            const isActive = i === this.currentDay ? 'active' : '';
            
            html += `
                <a href="iran-usa-war-day-${i}.html" class="day-card ${isActive}">
                    <span class="day-number">Day ${i}</span>
                    <span class="day-date">${dateStr}</span>
                </a>
            `;
        }
        container.innerHTML = html;
    },
    
    updateNavigation() {
        const prevBtn = document.querySelector('.nav-btn:first-child');
        const nextBtn = document.querySelector('.nav-btn:last-child');
        
        if (prevBtn && this.currentDay > 1) {
            prevBtn.href = `iran-usa-war-day-${this.currentDay - 1}.html`;
            prevBtn.innerHTML = `← Previous Day (Day ${this.currentDay - 1})`;
        }
        
        if (nextBtn) {
            if (this.currentDay < 45) { // Update when new day added
                nextBtn.classList.remove('disabled');
                nextBtn.href = `iran-usa-war-day-${this.currentDay + 1}.html`;
                nextBtn.innerHTML = `Next Day (Day ${this.currentDay + 1}) →`;
            }
        }
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    WarTimeline.generateDayLinks();
    WarTimeline.updateNavigation();
});