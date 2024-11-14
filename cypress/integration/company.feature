Feature: Company
@smoke
    Scenario: Select Company
        Given select company
        When click at บริษัท 
        And click at เพิ่มรายการใหม่
        And เข้าสู่ฟอร์มการใส่ข้อมูลรายการ
        And คลิกไปที่แถบชื่อบริษัท
        And บันทึกข้อมูลบริษัท
        And บันทึกสำเร็จ
        And ลบข้อมูลรายการ
        Then ยืนยันการลบรายการ
