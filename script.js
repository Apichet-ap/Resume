function showSection(sectionId) {
    // ซ่อนทุกส่วนก่อน
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // แสดงส่วนที่เลือก
    document.getElementById(sectionId).style.display = 'block';
}