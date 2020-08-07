export const admindata=[
    {
        name:'Dashboard',
        icon:'fa fa-home',
        
    },
    {
        name:'Institute Documents',
        icon:'fa fa-home',
       link:'/admin/institutedoc'
    },
    {
        name:'Reception',
        icon:'fa fa-home',
        submenu:[{
            name:'Admission Enquiry',
        icon:'fa fa-home',
        link:'/admin/reception/admissionenquiry'
        },{
            name:'Visitor Log',
        icon:'fa fa-home',
        link:'/admin/reception/visitorlog'
        },{
            name:'Call Log',
        icon:'fa fa-home',
        link:'/admin/reception/calllog'
        },
        {
            name:'Postal Record',
        icon:'fa fa-home',
        link:'/admin/reception/postalrecord'
        },
        {
            name:'Complaint',
        icon:'fa fa-home',
        link:'/admin/reception/complaint'
        },
        {
            name:'Gate Pass',
        icon:'fa fa-home',
        link:'/admin/reception/gatepass'
        },
        {
            name:'Visitor Message',
        icon:'fa fa-home',
        link:'/admin/reception/visitormessage'
        },
    
            ]
    },
    {
        name:'Academics',
    icon:'fa fa-home',
    submenu:[
        {
            name:'Acedemic Sessions',
        icon:'fa fa-home',
        link:'/admin/academics/academicsession'
        },
        {
            name:'Course',
        icon:'fa fa-home',
        link:'/admin/academics/course'
        },
        {
            name:'Batch',
        icon:'fa fa-home',
        link:'/admin/academics/batch'
        },
        {
            name:'Class Teacher',
        icon:'fa fa-home',
        link:'/admin/academics/classteacher'
        },
        {
            name:'Subject',
        icon:'fa fa-home',
        link:'/admin/academics/subject'
        },
        {
            name:'Subject Teacher',
        icon:'fa fa-home',
        link:'/admin/academics/subjectteacher'
        },
        {
            name:'Class Timing',
        icon:'fa fa-home',
        link:'/admin/academics/classtiming'
        },
        {
            name:'Time Table',
        icon:'fa fa-home',
        link:'/admin/academics/timetable'
        },
        {
            name:'Certificate',
        icon:'fa fa-home',
        link:'/admin/academics/certificate'
        },
    ]
    },
    {
        name:'Student',
    icon:'fa fa-home',
    submenu:[{
        name:'Student Import',
        link:'/admin/student/studentimport'
             },{
                name:'Registration',
                link:'/admin/student/registration'
                     },{
                        name:'Student List',
                        link:'/admin/student/studentlist'
                             },{
                                name:'Fee Payment',
                                link:'/admin/student/feepayment'
                                     },{
                                        name:'Roll No',
                                        link:'/admin/student/rollno'
                                             },{
                                                name:'ID Card',
                                                link:'/admin/student/idcard'
                                                     },{
                                                        name:'Image Upload',
                                                        link:'/admin/student/imageupload'
                                                             },{
                                                                name:'Attendence',
                                                                link:'/admin/student/attendence'
                                                                     },{
                                                                        name:'Promotion',
                                                                        link:'/admin/student/promotion'
                                                                             },{
                                                                                name:'Termination',
                                                                                link:'/admin/student/termination'
                                                                                     },{
                                                                                        name:'Parent',
                                                                                        link:'/admin/student/parent'
                                                                                             },{
                                                                                                name:'student/parent login',
                                                                                                link:'/admin/student/studentparentlogin'
                                                                                                     },]
    },
    {
        name:'Employee',
    icon:'fa fa-home',
    submenu:[{
        name:'Employee Import',
        link:'/admin/employee/employeeimport'
             },{
                name:'Employee List',
                link:'/admin/employee/employeelist'
                     }, {
                        name:'Post',
                        link:'/admin/employee/post'
                             },{
                                name:'ID Card',
                                link:'/admin/employee/idcard'
                                     },{
                                        name:'Attedence',
                                        link:'/admin/employee/attendence'
                                             },{
                                                name:'Leave',
                                                link:'/admin/employee/leave'
                                                     },{
                                                        name:'Payroll',
                                                        link:'/admin/employee/payroll'
                                                             },]
    },
    {
        name:'Exam',
    icon:'fa fa-home',
    submenu:[{
        name:'Exam Schedule',
        link:'/admin/exam/examschedule'
             },{
                name:'Record Marks',
                link:'/admin/exam/recordmarks'
                     },
                     {
                        name:'Report Card',
                        link:'/admin/exam/reportcard'
                             },{
                                name:'Topper Report',
                                link:'/admin/exam/topperreport'
                                     },{
                                        name:'Report Analysis',
                                        link:'/admin/exam/reportanalysis'
                                             },{
                                                name:'Online Exam',
                                                link:'/admin/exam/onlineexam'
                                                     },]
    },
    {
        name:'Finance',
    icon:'fa fa-home',
    submenu:[{
        name:'Fee Group',
        link:'/admin/finance/feegroup'
             },{
                name:'Fee Head',
                link:'/admin/finance/feehead'
                     },{
                        name:'Transport Fee',
                        link:'/admin/finance/transportfee'
                             },{
                                name:'Fee Commision',
                                link:'/admin/finance/feecommission'
                                     },{
                                        name:'Fee Allocation',
                                        link:'/admin/finance/feeallocation'
                                             },
                                             {
                                                name:'Account',
                                                link:'/admin/finance/account'
                                                     },
                                                     {
                                                        name:'Income',
                                                        link:'/admin/finance/income'
                                                             },{
                                                                name:'Expense',
                                                                link:'/admin/finance/expense'
                                                                     },{
                                                                        name:'Account Transfer',
                                                                        link:'/admin/finance/accounttransfer'
                                                                             },
                                                                             {
                                                                                name:'Report',
                                                                                link:'/admin/finance/report'
                                                                                     },
                                                    ]
    },
    {
        name:'Transport',
    icon:'fa fa-home',
    submenu:[{
        name:'Route',
        link:'/admin/transport/transportroute'
             },{
                name:'Vehicle',
                link:'/admin/transport/vehicle'
                     },{
                        name:'Vehicle Incharge',
                        link:'/admin/transport/vehicleincharge'
                             },{
                                name:'Document',
                                link:'/admin/transport/document'
                                     },{
                                        name:'Fuel',
                                        link:'/admin/transport/fuel'
                                             },{
                                                name:'Log',
                                                link:'/admin/transport/log'
                                                     },{
                                                        name:'Service Record',
                                                        link:'/admin/transport/servicerecord'
                                                             },{
                                                                name:'Report',
                                                                link:'/admin/transport/report'
                                                                     },]
    },
    {
        name:'Calender',
    icon:'fa fa-home',
    submenu:[{
        name:'Holiday',
        link:'/admin/calendar/holiday'
             },
             {
                name:'Event',
                link:'/admin/calendar/events'
                     },
                     {
                        name:'Celebration',
                        link:'/admin/calendar/celebration'
                             },
            ]
    },
    {
        name:'Resource',
    icon:'fa fa-home',
    submenu:[
        {
            name:'Assignment',
            link:'/admin/resource/assignment'
                 },
                 {
                    name:'Notes',
                    link:'/admin/resource/notes'
                         },
                         {
                            name:'Lesson Plan',
                            link:'/admin/resource/lessonplan'
                                 },
                                 {
                                    name:'Syllabus',
                                    link:'/admin/resource/syllabus'
                                         },
    ]
    },
    {
        name:'Library',
    icon:'fa fa-home',
    submenu:[
        {
            name:'Book',
            link:'/admin/library/book'
                 },
                 {
                    name:'issue',
                    link:'/admin/library/issue'
                         },
                         {
                            name:'Return',
                            link:'/admin/library/return'
                                 },
             ]
    },
    {
        name:'Inventory',
    icon:'fa fa-home',
    submenu:[{
        name:'Stock Category',
        link:'/admin/inventory/stockcategory'
             },{
                name:'Stock Item',
                link:'/admin/inventory/stockitem'
                     },{
                        name:'Vendor',
                        link:'/admin/inventory/vendor'
                             },{
                                name:'Transfer',
                                link:'/admin/inventory/transfer'
                                     },
                                     {
                                        name:'Purchase',
                                        link:'/admin/inventory/purchase'
                                             },
            ]
    },
    {
        name:'Post',
    icon:'fa fa-home',
    submenu:[
        {
            name:'Feed',
        icon:'fa fa-home',
        link:'/admin/post/feed'
        },
        {
            name:'Article',
        icon:'fa fa-home',
        link:'/admin/post/article'
        },
    ]
    },

    {
        name:'Communication',
    icon:'fa fa-home',
    submenu:[
        {
            name:'Meetings',
        icon:'fa fa-home',
        link:'/admin/communication/meetings'
        },
        {
            name:'My Meetings',
        icon:'fa fa-home',
        link:'/admin/communication/mymeetings'
        },
        {
            name:'History',
        icon:'fa fa-home',
        link:'/admin/communication/history'
        },
        {
            name:'My Notifications',
        icon:'fa fa-home',
        link:'/admin/communication/mynotifications'
        },
        {
            name:'SMS',
        icon:'fa fa-home',
        link:'/admin/communication/sms'
        },
        {
            name:'Email',
        icon:'fa fa-home',
        link:'/admin/communication/email'
        },
        {
            name:'Push Notification',
        icon:'fa fa-home',
        link:'/admin/communication/pushnotification'
        },
    ]

    
    },
]