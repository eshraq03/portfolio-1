// وظيفة لتبديل الوضع الداكن (Dark Mode)
function toggleDarkMode() {
    var element = document.body;  // الحصول على عنصر الجسم
    element.classList.toggle("dark-mode");  // التبديل بين الوضع الداكن والعادي
}

// إضافة مستمع الحدث لنموذج الاتصال عند الإرسال
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // منع إرسال النموذج بشكل افتراضي

    var fullName = document.getElementById('fullName').value;  // الحصول على قيمة الاسم الكامل
    var emailAddress = document.getElementById('emailAddress').value;  // الحصول على قيمة البريد الإلكتروني
    var message = document.getElementById('message').value;  // الحصول على قيمة الرسالة
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // نمط التحقق من البريد الإلكتروني

    // التحقق إذا كان الاسم الكامل فارغًا
    if (fullName === '') {
        alert('الرجاء إدخال الاسم الكامل.');
        return;  // إيقاف تنفيذ الكود إذا كان الاسم فارغًا
    }

    // التحقق إذا كان البريد الإلكتروني غير صالح
    if (!emailPattern.test(emailAddress)) {
        alert('الرجاء إدخال عنوان بريد إلكتروني صحيح.');
        return;  // إيقاف تنفيذ الكود إذا كان البريد الإلكتروني غير صحيح
    }

    // التحقق إذا كانت الرسالة فارغة
    if (message === '') {
        alert('الرجاء إدخال الرسالة.');
        return;  // إيقاف تنفيذ الكود إذا كانت الرسالة فارغة
    }

    // رسالة تأكيد نجاح إرسال النموذج
    alert('تم إرسال النموذج بنجاح!');
});
