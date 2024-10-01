
// script.js

// وظيفة لإضافة جهاز جديد
document.getElementById('add-device').addEventListener('click', function() {
    const deviceName = prompt("أدخل اسم الجهاز الجديد:");
    if (deviceName) {
        const deviceList = document.querySelector('#devices ul');
        const newDevice = document.createElement('li');
        newDevice.textContent = `${deviceName} - في انتظار الاتصال`;
        deviceList.appendChild(newDevice);
    }
});

// وظيفة لإدارة الاتصال
document.getElementById('connect-button').addEventListener('click', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    const ipAddress = document.getElementById('ip-address').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const protocol = document.getElementById('protocol').value;

    // من المفترض أن يتم هنا إجراء الاتصال بالجهاز
    console.log(`محاولة الاتصال بالجهاز:\nIP: ${ipAddress}\nاسم المستخدم: ${username}\nكلمة المرور: ${password}\nالبروتوكول: ${protocol}`);

    // هنا يمكن إضافة منطق الاتصال وإظهار حالة الاتصال
    // على سبيل المثال :
    const deviceList = document.querySelector('#devices ul');
    let connectedDevice = deviceList.querySelector('li:last-child');
    if (connectedDevice) {
        connectedDevice.textContent = `${connectedDevice.textContent.split(' - ')[0]} - متصل`;
    }
    
    alert(`تم الاتصال بالجهاز ${ipAddress} بنجاح!`);
});

// دالة لتفعيل إعدادات الأمان
document.addEventListener('change', function(event) {
    if (event.target.name === 'firewall') {
        const firewallStatus = event.target.checked ? "مفعل" : "معطل";
        console.log(`حالة الجدار الناري: ${firewallStatus}`);
    }
    if (event.target.name === 'vpn') {
        const vpnStatus = event.target.checked ? "مفعل" : "معطل";
        console.log(`حالة VPN: ${vpnStatus}`);
    }
});

// وظيفة الضغط على زر تحديث التطبيق
document.querySelector('input[name="auto-update"]').addEventListener('change', function(event) {
    const updateStatus = event.target.checked ? "التحديث التلقائي مفعل" : "التحديث التلقائي معطل";
    console.log(updateStatus);
});
