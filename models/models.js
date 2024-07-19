const sequelize = require('../db')
const {Sequelize, DataTypes} = require('sequelize')
const User = sequelize.define('users',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    tn:{type:DataTypes.STRING,unique:true},
    full_name:{type:DataTypes.TEXT},
    login:{type:DataTypes.STRING,unique:true},
    email:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING},
    avatar:{type:DataTypes.TEXT},
    account:{type:DataTypes.TEXT},
    inn:{type:DataTypes.STRING},
    admin:{type:DataTypes.STRING},
    moderator:{type:DataTypes.BOOLEAN,defaultValue: false},
    editcom:{type:DataTypes.STRING},
    reg:{type:DataTypes.BOOLEAN,defaultValue: false},
    checked:{type:DataTypes.BOOLEAN,defaultValue: false},
    passport:{type:DataTypes.STRING},
    phone:{type:DataTypes.STRING},
    phonecompany:{type:DataTypes.STRING},
    snils:{type:DataTypes.STRING},
    unit:{type:DataTypes.INTEGER},
    developer:{type:DataTypes.TEXT}
})
const Token = sequelize.define('token',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    user_id:{type:DataTypes.INTEGER,ref:'users'},
    device_token:{type:DataTypes.TEXT},
    refresh_token:{type:DataTypes.TEXT,require:true}
})
const T13 = sequelize.define('t13', {
    id:{type:DataTypes.INTEGER,primaryKey: true,autoIncrement:true},
    name:{type:DataTypes.TEXT},
    developer:{type:DataTypes.TEXT},
    branch:{type:DataTypes.TEXT},
    onboard:{type:DataTypes.TEXT},
    term:{type:DataTypes.TEXT},
    document:{type:DataTypes.TEXT},
    tn:{type:DataTypes.TEXT},
    groups:{type:DataTypes.TEXT},
    status:{type:DataTypes.TEXT},
    gender:{type:DataTypes.TEXT},
    rk:{type:DataTypes.STRING},
    sn:{type:DataTypes.STRING},
    oklad:{type:DataTypes.STRING},
    method:{type:DataTypes.TEXT},
    month:{type:DataTypes.STRING},
    year:{type:DataTypes.STRING},
    inn:{type:DataTypes.STRING},
    birthday:{type:DataTypes.STRING},
    d1:{type:DataTypes.STRING},
    d2:{type:DataTypes.STRING},
    d3:{type:DataTypes.STRING},
    d4:{type:DataTypes.STRING},
    d5:{type:DataTypes.STRING},
    d6:{type:DataTypes.STRING},
    d7:{type:DataTypes.STRING},
    d8:{type:DataTypes.STRING},
    d9:{type:DataTypes.STRING},
    d10:{type:DataTypes.STRING},
    d11:{type:DataTypes.STRING},
    d12:{type:DataTypes.STRING},
    d13:{type:DataTypes.STRING},
    d14:{type:DataTypes.STRING},
    d15:{type:DataTypes.STRING},
    d16:{type:DataTypes.STRING},
    d17:{type:DataTypes.STRING},
    d18:{type:DataTypes.STRING},
    d19:{type:DataTypes.STRING},
    d20:{type:DataTypes.STRING},
    d21:{type:DataTypes.STRING},
    d22:{type:DataTypes.STRING},
    d23:{type:DataTypes.STRING},
    d24:{type:DataTypes.STRING},
    d25:{type:DataTypes.STRING},
    d26:{type:DataTypes.STRING},
    d27:{type:DataTypes.STRING},
    d28:{type:DataTypes.STRING},
    d29:{type:DataTypes.STRING},
    d30:{type:DataTypes.STRING},
    d31:{type:DataTypes.STRING}
})
const T13Uni = sequelize.define('t13uni', {
    id:{type:DataTypes.INTEGER,primaryKey: true,autoIncrement:true},
    name:{type:DataTypes.TEXT},
    developer:{type:DataTypes.TEXT},
    branch:{type:DataTypes.TEXT},
    onboard:{type:DataTypes.TEXT},
    term:{type:DataTypes.TEXT},
    document:{type:DataTypes.TEXT},
    tn:{type:DataTypes.TEXT,unique: true},
    groups:{type:DataTypes.TEXT},
    status:{type:DataTypes.TEXT},
    gender:{type:DataTypes.TEXT},
    rk:{type:DataTypes.STRING},
    sn:{type:DataTypes.STRING},
    oklad:{type:DataTypes.STRING},
    method:{type:DataTypes.TEXT},
    month:{type:DataTypes.STRING},
    year:{type:DataTypes.STRING},
    inn:{type:DataTypes.STRING},
    birthday:{type:DataTypes.STRING},
})
const T13Bye = sequelize.define('t13bye', {
    id:{type:DataTypes.INTEGER,primaryKey: true,autoIncrement:true},
    name:{type:DataTypes.TEXT},
    developer:{type:DataTypes.TEXT},
    branch:{type:DataTypes.TEXT},
    onboard:{type:DataTypes.TEXT},
    term:{type:DataTypes.TEXT},
    document:{type:DataTypes.TEXT},
    tn:{type:DataTypes.TEXT,unique: true},
    groups:{type:DataTypes.TEXT},
    status:{type:DataTypes.TEXT},
    gender:{type:DataTypes.TEXT},
    rk:{type:DataTypes.STRING},
    sn:{type:DataTypes.STRING},
    oklad:{type:DataTypes.STRING},
    method:{type:DataTypes.TEXT},
    month:{type:DataTypes.STRING},
    year:{type:DataTypes.STRING},
    inn:{type:DataTypes.STRING},
    birthday:{type:DataTypes.STRING},
})
const T13Black = sequelize.define('t13black', {
    id:{type:DataTypes.INTEGER,primaryKey: true,autoIncrement:true},
    name:{type:DataTypes.TEXT},
    tn:{type:DataTypes.TEXT,unique: true}
})
const Company = sequelize.define('company',{
    id:{type:DataTypes.INTEGER,primaryKey: true,autoIncrement:true},
    inn:{type:DataTypes.STRING},
    namecom:{type:DataTypes.STRING},
    namecut:{type:DataTypes.STRING},
    contact:{type:DataTypes.STRING},
    phone:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING},
    ogrn:{type:DataTypes.STRING},
    status:{type:DataTypes.BOOLEAN},
    director:{type:DataTypes.STRING},
    tabel:{type:DataTypes.BOOLEAN},
    zp:{type:DataTypes.BOOLEAN},
    crm:{type:DataTypes.BOOLEAN},
    vak:{type:DataTypes.BOOLEAN},
    sale:{type:DataTypes.BOOLEAN},
    uraddress:{type:DataTypes.STRING},
    phonecom:{type:DataTypes.STRING},
    phonepri:{type:DataTypes.STRING},
    phonehr:{type:DataTypes.STRING},
    phonemon:{type:DataTypes.STRING},
    fax:{type:DataTypes.STRING},
    factaddress:{type:DataTypes.STRING},
    rs:{type:DataTypes.STRING},
    namebank:{type:DataTypes.STRING},
    kors:{type:DataTypes.STRING},
    bik:{type:DataTypes.STRING},
    emailcom:{type:DataTypes.STRING},
    srto_month:{type:DataTypes.STRING},
    srto_year:{type:DataTypes.STRING},
    srto_branch:{type:DataTypes.STRING},
    vem:{type:DataTypes.INTEGER},
    periodvem:{type:DataTypes.STRING},
    daysvem:{type:DataTypes.STRING},
    document:{type:DataTypes.STRING},
    oclockday:{type:DataTypes.STRING},
    information:{type:DataTypes.STRING}
})
const YmSvarka = sequelize.define('ym_svarka',{
    id:{type:DataTypes.INTEGER,primaryKey: true,autoIncrement:true},
    indicator:{type:DataTypes.STRING},
    shifr:{type:DataTypes.STRING},
    year:{type:DataTypes.STRING},
    month:{type:DataTypes.STRING},
    inn:{type:DataTypes.STRING}
})
const TabelSv = sequelize.define('tabel_sv',{
    id:{type:DataTypes.INTEGER,primaryKey: true,autoIncrement:true},
    object_id:{type:DataTypes.INTEGER,ref:'objects'},
    shifr:{type:DataTypes.STRING},
    year:{type:DataTypes.STRING},
    month:{type:DataTypes.STRING},
    crew:{type:DataTypes.STRING},
    checkin:{type:DataTypes.STRING},
    name:{type:DataTypes.STRING},
    developer:{type:DataTypes.STRING},
    tn:{type:DataTypes.STRING},
    inn:{type:DataTypes.STRING},
    volume:{type:DataTypes.STRING},
    unit:{type:DataTypes.STRING},
    norma:{type:DataTypes.STRING},
    writed:{type:DataTypes.INTEGER},
    d1:{type:DataTypes.FLOAT},
    d2:{type:DataTypes.FLOAT},
    d3:{type:DataTypes.FLOAT},
    d4:{type:DataTypes.FLOAT},
    d5:{type:DataTypes.FLOAT},
    d6:{type:DataTypes.FLOAT},
    d7:{type:DataTypes.FLOAT},
    d8:{type:DataTypes.FLOAT},
    d9:{type:DataTypes.FLOAT},
    d10:{type:DataTypes.FLOAT},
    d11:{type:DataTypes.FLOAT},
    d12:{type:DataTypes.FLOAT},
    d13:{type:DataTypes.FLOAT},
    d14:{type:DataTypes.FLOAT},
    d15:{type:DataTypes.FLOAT},
    d16:{type:DataTypes.FLOAT},
    d17:{type:DataTypes.FLOAT},
    d18:{type:DataTypes.FLOAT},
    d19:{type:DataTypes.FLOAT},
    d20:{type:DataTypes.FLOAT},
    d21:{type:DataTypes.FLOAT},
    d22:{type:DataTypes.FLOAT},
    d23:{type:DataTypes.FLOAT},
    d24:{type:DataTypes.FLOAT},
    d25:{type:DataTypes.FLOAT},
    d26:{type:DataTypes.FLOAT},
    d27:{type:DataTypes.FLOAT},
    d28:{type:DataTypes.FLOAT},
    d29:{type:DataTypes.FLOAT},
    d30:{type:DataTypes.FLOAT},
    d31:{type:DataTypes.FLOAT},
    p1:{type:DataTypes.FLOAT},
    p2:{type:DataTypes.FLOAT},
    p3:{type:DataTypes.FLOAT},
    p4:{type:DataTypes.FLOAT},
    p5:{type:DataTypes.FLOAT},
    p6:{type:DataTypes.FLOAT},
    p7:{type:DataTypes.FLOAT},
    p8:{type:DataTypes.FLOAT},
    p9:{type:DataTypes.FLOAT},
    p10:{type:DataTypes.FLOAT},
    p11:{type:DataTypes.FLOAT},
    p12:{type:DataTypes.FLOAT},
    p13:{type:DataTypes.FLOAT},
    p14:{type:DataTypes.FLOAT},
    p15:{type:DataTypes.FLOAT},
    p16:{type:DataTypes.FLOAT},
    p17:{type:DataTypes.FLOAT},
    p18:{type:DataTypes.FLOAT},
    p19:{type:DataTypes.FLOAT},
    p20:{type:DataTypes.FLOAT},
    p21:{type:DataTypes.FLOAT},
    p22:{type:DataTypes.FLOAT},
    p23:{type:DataTypes.FLOAT},
    p24:{type:DataTypes.FLOAT},
    p25:{type:DataTypes.FLOAT},
    p26:{type:DataTypes.FLOAT},
    p27:{type:DataTypes.FLOAT},
    p28:{type:DataTypes.FLOAT},
    p29:{type:DataTypes.FLOAT},
    p30:{type:DataTypes.FLOAT},
    p31:{type:DataTypes.FLOAT}
})
const TableTabel = sequelize.define('tabletabel',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING},
    developer:{type:DataTypes.STRING},
    branch:{type:DataTypes.STRING},
    object_id:{type:DataTypes.INTEGER,ref:'objects'},
    shifr:{type:DataTypes.TEXT},
    month:{type:DataTypes.STRING},
    year:{type:DataTypes.STRING},
    ktu:{type:DataTypes.STRING},
    marker:{type:DataTypes.INTEGER},
    ras:{type:DataTypes.STRING},
    company_id:{type:DataTypes.INTEGER,ref:'company'},
    inn:{type:DataTypes.STRING},
    transport:{type:DataTypes.STRING},
    price:{type:DataTypes.STRING},
    tn:{type:DataTypes.STRING},
    m1:{type:DataTypes.STRING},
    m2:{type:DataTypes.STRING},
    m3:{type:DataTypes.STRING},
    m4:{type:DataTypes.STRING},
    m5:{type:DataTypes.STRING},
    m6:{type:DataTypes.STRING},
    m7:{type:DataTypes.STRING},
    m8:{type:DataTypes.STRING},
    m9:{type:DataTypes.STRING},
    m10:{type:DataTypes.STRING},
    m11:{type:DataTypes.STRING},
    m12:{type:DataTypes.STRING},
    m13:{type:DataTypes.STRING},
    m14:{type:DataTypes.STRING},
    m15:{type:DataTypes.STRING},
    m16:{type:DataTypes.STRING},
    m17:{type:DataTypes.STRING},
    m18:{type:DataTypes.STRING},
    m19:{type:DataTypes.STRING},
    m20:{type:DataTypes.STRING},
    m21:{type:DataTypes.STRING},
    m22:{type:DataTypes.STRING},
    m23:{type:DataTypes.STRING},
    m24:{type:DataTypes.STRING},
    m25:{type:DataTypes.STRING},
    m26:{type:DataTypes.STRING},
    m27:{type:DataTypes.STRING},
    m28:{type:DataTypes.STRING},
    m29:{type:DataTypes.STRING},
    m30:{type:DataTypes.STRING},
    m31:{type:DataTypes.STRING},
    c1:{type:DataTypes.STRING},
    c2:{type:DataTypes.STRING},
    c3:{type:DataTypes.STRING},
    c4:{type:DataTypes.STRING},
    c5:{type:DataTypes.STRING},
    c6:{type:DataTypes.STRING},
    c7:{type:DataTypes.STRING},
    c8:{type:DataTypes.STRING},
    c9:{type:DataTypes.STRING},
    c10:{type:DataTypes.STRING},
    c11:{type:DataTypes.STRING},
    c12:{type:DataTypes.STRING},
    c13:{type:DataTypes.STRING},
    c14:{type:DataTypes.STRING},
    c15:{type:DataTypes.STRING},
    c16:{type:DataTypes.STRING},
    c17:{type:DataTypes.STRING},
    c18:{type:DataTypes.STRING},
    c19:{type:DataTypes.STRING},
    c20:{type:DataTypes.STRING},
    c21:{type:DataTypes.STRING},
    c22:{type:DataTypes.STRING},
    c23:{type:DataTypes.STRING},
    c24:{type:DataTypes.STRING},
    c25:{type:DataTypes.STRING},
    c26:{type:DataTypes.STRING},
    c27:{type:DataTypes.STRING},
    c28:{type:DataTypes.STRING},
    c29:{type:DataTypes.STRING},
    c30:{type:DataTypes.STRING},
    c31:{type:DataTypes.STRING},
    dop1:{type:DataTypes.STRING},
    dop2:{type:DataTypes.STRING},
    dop3:{type:DataTypes.STRING},
    dop4:{type:DataTypes.STRING},
    dop5:{type:DataTypes.STRING},
    dop6:{type:DataTypes.STRING},
    dop7:{type:DataTypes.STRING},
    dop8:{type:DataTypes.STRING},
    dop9:{type:DataTypes.STRING},
    dop10:{type:DataTypes.STRING},
    dop11:{type:DataTypes.STRING},
    dop12:{type:DataTypes.STRING},
    dop13:{type:DataTypes.STRING},
    dop14:{type:DataTypes.STRING},
    dop15:{type:DataTypes.STRING},
    dop16:{type:DataTypes.STRING},
    dop17:{type:DataTypes.STRING},
    dop18:{type:DataTypes.STRING},
    dop19:{type:DataTypes.STRING},
    dop20:{type:DataTypes.STRING},
    dop21:{type:DataTypes.STRING},
    dop22:{type:DataTypes.STRING},
    dop23:{type:DataTypes.STRING},
    dop24:{type:DataTypes.STRING},
    dop25:{type:DataTypes.STRING},
    dop26:{type:DataTypes.STRING},
    dop27:{type:DataTypes.STRING},
    dop28:{type:DataTypes.STRING},
    dop29:{type:DataTypes.STRING},
    dop30:{type:DataTypes.STRING},
    dop31:{type:DataTypes.STRING}
})
const Days = sequelize.define('days',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    month:{type:DataTypes.STRING},
    name:{type:DataTypes.TEXT},
    number:{type:DataTypes.STRING},
    cost:{type:DataTypes.STRING},
    days:{type:DataTypes.STRING},
    uchet:{type:DataTypes.INTEGER},
    stazh:{type:DataTypes.STRING},
    inn:{type:DataTypes.STRING},
    snils:{type:DataTypes.STRING},
    held:{type:DataTypes.STRING},
    payments:{type:DataTypes.STRING},
    total:{type:DataTypes.STRING},
    tn:{type:DataTypes.STRING}
})
const Objects = sequelize.define('objects',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    shifr:{type:DataTypes.TEXT},
    nameobject:{type:DataTypes.TEXT},
    inn:{type:DataTypes.STRING},
    ras:{type:DataTypes.INTEGER},
    ogm_j:{type:DataTypes.INTEGER},
    dop1:{type:DataTypes.INTEGER},
    dop2:{type:DataTypes.INTEGER},
    prior:{type:DataTypes.INTEGER}
})
const NumberObjects = sequelize.define('number_objects',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    object_id:{type:DataTypes.INTEGER,ref:'objects'},
    nameobject:{type:DataTypes.STRING},
    user_id:{type:DataTypes.INTEGER,ref:'users'},
    papa:{type:DataTypes.STRING},
    burn:{type:DataTypes.DATE,defaultValue: Sequelize.fn('NOW')},
    inn:{type:DataTypes.STRING},
    login:{type:DataTypes.STRING}
})
const ObjectsSV = sequelize.define('obj_sv',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    shifr:{type:DataTypes.STRING},
    shifrid:{type:DataTypes.INTEGER},
    nameobject:{type:DataTypes.STRING},
    user:{type:DataTypes.STRING},
    papa:{type:DataTypes.STRING},
    burn:{type:DataTypes.DATE,defaultValue: Sequelize.fn('NOW')},
    inn:{type:DataTypes.STRING},
    login:{type:DataTypes.STRING}
})
const Jobs = sequelize.define('positions',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING},
    rules:{type:DataTypes.INTEGER}
})
const Phonebook = sequelize.define('phonebook',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING},
    position:{type:DataTypes.TEXT},
    job:{type:DataTypes.TEXT},
    mobile_phone:{type:DataTypes.TEXT},
    city_phone:{type:DataTypes.TEXT},
    ats:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING},
    order:{type:DataTypes.INTEGER},
    heading:{type:DataTypes.BOOLEAN}
})
const Payslip = sequelize.define('payslip',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    month:{type:DataTypes.STRING},
    year:{type:DataTypes.STRING},
    type:{type:DataTypes.STRING},
    name:{type:DataTypes.TEXT},
    cost:{type:DataTypes.TEXT},
    days:{type:DataTypes.TEXT},
    uchet:{type:DataTypes.TEXT},
    stazh:{type:DataTypes.TEXT},
    inn:{type:DataTypes.STRING},
    held:{type:DataTypes.TEXT},
    payments:{type:DataTypes.TEXT},
    total:{type:DataTypes.TEXT},
    tn:{type:DataTypes.STRING},
})
const Ymshifr = sequelize.define('ymshifr',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    object_id:{type:DataTypes.INTEGER,ref:'objects'},
    shifr:{type:DataTypes.STRING},
    year:{type:DataTypes.STRING},
    month:{type:DataTypes.STRING},
    ch1:{type:DataTypes.INTEGER},
    ch2:{type:DataTypes.INTEGER},
    ch3:{type:DataTypes.INTEGER},
    ch4:{type:DataTypes.INTEGER},
    ch5:{type:DataTypes.INTEGER},
    ch6:{type:DataTypes.INTEGER},
    ch7:{type:DataTypes.INTEGER},
    ch8:{type:DataTypes.INTEGER},
    ch9:{type:DataTypes.INTEGER},
    ch10:{type:DataTypes.INTEGER},
    ch11:{type:DataTypes.INTEGER},
    ch12:{type:DataTypes.INTEGER},
    ch13:{type:DataTypes.INTEGER},
    ch14:{type:DataTypes.INTEGER},
    ch15:{type:DataTypes.INTEGER},
    ch16:{type:DataTypes.INTEGER},
    ch17:{type:DataTypes.INTEGER},
    ch18:{type:DataTypes.INTEGER},
    ch19:{type:DataTypes.INTEGER},
    ch20:{type:DataTypes.INTEGER},
    ch21:{type:DataTypes.INTEGER},
    ch22:{type:DataTypes.INTEGER},
    ch23:{type:DataTypes.INTEGER},
    ch24:{type:DataTypes.INTEGER},
    ch25:{type:DataTypes.INTEGER},
    ch26:{type:DataTypes.INTEGER},
    ch27:{type:DataTypes.INTEGER},
    ch28:{type:DataTypes.INTEGER},
    ch29:{type:DataTypes.INTEGER},
    ch30:{type:DataTypes.INTEGER},
    ch31:{type:DataTypes.INTEGER},
    com:{type:DataTypes.INTEGER},
    dop:{type:DataTypes.INTEGER},
    auto:{type:DataTypes.INTEGER},
    itr:{type:DataTypes.INTEGER},
    rab:{type:DataTypes.INTEGER},
    ras:{type:DataTypes.INTEGER},
    inn:{type:DataTypes.STRING},
    trash:{type:DataTypes.BOOLEAN}
})
const Files = sequelize.define('files',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING},
    type:{type:DataTypes.STRING},
    size:{type:DataTypes.INTEGER,default:0},
    access_link:{type:DataTypes.TEXT},
    path:{type:DataTypes.TEXT,default: ''},
    user_id:{type:DataTypes.INTEGER,ref:'users'},
    parent_id:{type:DataTypes.INTEGER,ref:'files'},
    child_id: {type: DataTypes.ARRAY(DataTypes.INTEGER)},
    basket:{type:DataTypes.BOOLEAN,defaultValue:false},
    havebasket:{type:DataTypes.BOOLEAN,defaultValue:false}
})
const DiskSpace = sequelize.define('diskspace',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    user_id:{type:DataTypes.INTEGER,ref:'users'},
    usedspace:{type:DataTypes.BIGINT,default:0},
    diskspace:{type:DataTypes.BIGINT,default:0}
})
const Survey  = sequelize.define('survey',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title:{type:DataTypes.TEXT},
    text:{type:DataTypes.TEXT},
    type:{type:DataTypes.INTEGER,default:0},
    creater_id:{type:DataTypes.INTEGER,ref:'users'},
    onanswer:{type:DataTypes.BOOLEAN,default:true},
    image:{type:DataTypes.STRING},
    trash:{type:DataTypes.BOOLEAN,default:false}
})
const Question = sequelize.define('question', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    survey_id:{type:DataTypes.INTEGER,ref:'survey'},
    type:{type:DataTypes.INTEGER,default:0},
    text:{type:DataTypes.TEXT}
})
const Answer = sequelize.define('answer', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    question_id:{type:DataTypes.INTEGER,ref:'question'},
    survey_id:{type:DataTypes.INTEGER,ref:'survey'},
    user_id:{type:DataTypes.INTEGER,ref:'survey'},
})
const Posts = sequelize.define('rss', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title:{type:DataTypes.TEXT,allowNull: false},
    text:{type:DataTypes.TEXT,allowNull: false},
    image:{type:DataTypes.TEXT,allowNull: false},
    json_data:{type:DataTypes.JSON,default:null},
    oncomment:{type:DataTypes.BOOLEAN,default:true},
    trash:{type:DataTypes.BOOLEAN,default:false},
    clicks:{type:DataTypes.INTEGER,default:0},
    user_id_likes: {type: DataTypes.ARRAY(DataTypes.INTEGER),defaultValue:[]}
})
const BestBoard = sequelize.define('bestboard', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING},
    tn:{type:DataTypes.STRING},
    developer:{type:DataTypes.STRING},
    onboard:{type:DataTypes.STRING},
    dev:{type:DataTypes.STRING},
    inn:{type:DataTypes.STRING}
})
const MainBlocks  = sequelize.define('mainblocks',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    type:{type:DataTypes.INTEGER},
    block_id:{type:DataTypes.INTEGER,allowNull:false},
    data:{type:DataTypes.TEXT,default:''}
})
const Contest  = sequelize.define('contest',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    user_id:{type:DataTypes.INTEGER,ref:'users'},
    phone:{type:DataTypes.STRING},
    mail:{type:DataTypes.STRING},
    name:{type:DataTypes.TEXT},
    age:{type:DataTypes.INTEGER},
    image:{type:DataTypes.TEXT},
    trash:{type:DataTypes.BOOLEAN,default:false}
})
const Nominations  = sequelize.define('nominations', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.TEXT}
})
const KidsAnswers  = sequelize.define('kidsanswers',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    contest_id:{type:DataTypes.INTEGER,ref:'contest'},
    nomination_id:{type:DataTypes.INTEGER,ref:'nominations'},
    user_id:{type:DataTypes.INTEGER,ref:'users'}
})
const Managers =  sequelize.define('managers',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    mail:{type:DataTypes.STRING},
    name:{type:DataTypes.STRING},
    tn:{type:DataTypes.STRING},
    description:{type:DataTypes.TEXT}
})
const Messages = sequelize.define('messages', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    tn_to:{type:DataTypes.STRING,ref:'question'},
    tn_from:{type:DataTypes.STRING,ref:'survey'},
    title:{type:DataTypes.TEXT},
    text:{type:DataTypes.TEXT},
    files:{type:DataTypes.TEXT},
    trash_to:{type:DataTypes.BOOLEAN,default:false},
    trash_from:{type:DataTypes.BOOLEAN,default:false},
    read:{type:DataTypes.BOOLEAN,default:false},
    voice: {type: DataTypes.TEXT}
})
const PostComments = sequelize.define('postcomments', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    creator_tn:{type:DataTypes.STRING,ref:'users'},
    post_id:{type:DataTypes.INTEGER,ref:'rss'},
    text:{type:DataTypes.TEXT},
    trash:{type:DataTypes.BOOLEAN,default:false}
})
const Tasks = sequelize.define('tasks', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.TEXT},
    text:{type:DataTypes.TEXT},
    creator_tn:{type:DataTypes.STRING,ref:'users'},
    expiration:{type:DataTypes.DATE},
    status_id:{type:DataTypes.INTEGER,ref:'taskstatuses'},
    priority_id:{type:DataTypes.INTEGER,ref:'priority'},
    connection_id:{type:DataTypes.INTEGER,ref:'taskconnections'},
    trash:{type:DataTypes.BOOLEAN,default:false}
})
const TaskConnections = sequelize.define('taskconnections', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    obj:{type:DataTypes.STRING},
    type:{type:DataTypes.INTEGER}
})
const TaskDocs = sequelize.define('taskdocs', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    filename:{type:DataTypes.STRING},
    chain_id:{type:DataTypes.INTEGER,ref:'taskchains'},
    task_id:{type:DataTypes.INTEGER,ref:'tasks'}
})
const TaskResults = sequelize.define('taskresults', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    task_id:{type:DataTypes.INTEGER,ref:'tasks'},
    files_id: {type: DataTypes.ARRAY(DataTypes.INTEGER)},
    text:{type:DataTypes.TEXT}
})
const TaskChains = sequelize.define('taskchains', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    task_id:{type:DataTypes.INTEGER,ref:'tasks'},
    user_tn:{type:DataTypes.STRING,ref:'users'},
    status_id:{type:DataTypes.INTEGER,ref:'statuses'},
    next:{type: DataTypes.ARRAY(DataTypes.STRING)},
    type:{type:DataTypes.INTEGER}
})
const TaskGroups = sequelize.define('taskgroups', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.TEXT},
    creator_tn:{type:DataTypes.STRING,ref:'users'},
    users_tn:{type: DataTypes.ARRAY(DataTypes.STRING)},
})
const Statuses = sequelize.define('statuses', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    value:{type:DataTypes.TEXT},
    label:{type:DataTypes.TEXT},
    type:{type:DataTypes.INTEGER},
    color:{type:DataTypes.STRING},
    background:{type:DataTypes.STRING},
    unit:{type:DataTypes.INTEGER}
})
const Priority = sequelize.define('priority', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    value:{type:DataTypes.TEXT},
    label:{type:DataTypes.TEXT},
    type:{type:DataTypes.INTEGER}
})
const OgmPrice = sequelize.define('ogmprice', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.TEXT},
    price:{type:DataTypes.INTEGER},
    group:{type:DataTypes.TEXT},
    prefix:{type:DataTypes.TEXT},
    inn:{type:DataTypes.TEXT}
})
const WorkPrice = sequelize.define('workprice', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.TEXT},
    tariff:{type:DataTypes.FLOAT},
    price:{type:DataTypes.INTEGER},
    position:{type:DataTypes.TEXT},
    comment:{type:DataTypes.TEXT},
    prefix:{type:DataTypes.TEXT},
    inn:{type:DataTypes.TEXT}
})
const StatementsSimples = sequelize.define('statementssimples', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.TEXT},
    file:{type:DataTypes.TEXT},
})

const CrewSv = sequelize.define('crewsv',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    shifr:{type:DataTypes.TEXT},
    namecrew:{type:DataTypes.TEXT},
    compound:{type:DataTypes.INTEGER},
    pointer:{type:DataTypes.INTEGER},
    inn:{type:DataTypes.STRING},
    object_id:{type:DataTypes.INTEGER},
    crew_id:{type:DataTypes.INTEGER}
})
const CrewBase = sequelize.define('crewbase',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    crewname:{type:DataTypes.STRING},
    totalmans:{type:DataTypes.STRING},
    comment:{type:DataTypes.STRING},
    inn:{type:DataTypes.STRING}
})
const CrewDoclist = sequelize.define('crewdoclist',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    crew:{type:DataTypes.STRING},
    name:{type:DataTypes.STRING},
    datein:{type:DataTypes.STRING},
    dateto:{type:DataTypes.STRING},
    inn:{type:DataTypes.STRING},
    krest:{type:DataTypes.INTEGER}
})
const CrewManlist = sequelize.define('crewmanlist',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    crew:{type:DataTypes.STRING},
    maninfo:{type:DataTypes.STRING},
    inn:{type:DataTypes.STRING},
})

const CrewMans = sequelize.define('crewmans',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    crew_id:{type:DataTypes.INTEGER},
    user_tn:{type:DataTypes.STRING},
    inn:{type:DataTypes.STRING},
})

const ViewsWorkSv = sequelize.define('viewsworksv',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    shifr:{type:DataTypes.STRING},
    viewname:{type:DataTypes.TEXT},
    volume:{type:DataTypes.INTEGER},
    unit:{type:DataTypes.STRING},
    norma:{type:DataTypes.STRING},
    inn:{type:DataTypes.STRING},
})

const KtuDoc = sequelize.define('ktudoc',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    inn:{type:DataTypes.STRING},
    month:{type:DataTypes.STRING},
    year:{type:DataTypes.STRING},
    author:{type:DataTypes.STRING},
    comment:{type:DataTypes.STRING},
    trash:{type:DataTypes.BOOLEAN}
})
const KtuList = sequelize.define('ktulist',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    ktudoc_id:{type:DataTypes.INTEGER,ref:'ktudoc'},
    shifr:{type:DataTypes.STRING},
    user_tn:{type:DataTypes.STRING},
    ktudate:{type:DataTypes.DATE},
    content:{type:DataTypes.STRING},
    ktuman:{type:DataTypes.STRING},
    szfrom:{type:DataTypes.STRING},
    ktu:{type:DataTypes.FLOAT},
    percent:{type:DataTypes.INTEGER},
})

const MessageSv = sequelize.define('messagesv',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    shifr:{type:DataTypes.STRING},
    crewname:{type:DataTypes.STRING},
    crewid:{type:DataTypes.STRING},
    year:{type:DataTypes.STRING},
    month:{type:DataTypes.STRING},
    day:{type:DataTypes.STRING},
    comment:{type:DataTypes.STRING},
    autor:{type:DataTypes.STRING},
    datein:{type:DataTypes.STRING},
    inn:{type:DataTypes.STRING},
})

const ZaSv = sequelize.define('zasv',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    year:{type:DataTypes.STRING},
    month:{type:DataTypes.STRING},
    object_id:{type:DataTypes.STRING},
    author_tn:{type:DataTypes.STRING},
    status_id:{type:DataTypes.INTEGER},
    num:{type:DataTypes.STRING},
    trash:{type:DataTypes.BOOLEAN}
})
const TableZayavka = sequelize.define('tablezayavka',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    zasv_id:{type:DataTypes.INTEGER,ref:'zasv'},
    num:{type:DataTypes.STRING},
    codecrew:{type:DataTypes.STRING},
    date:{type:DataTypes.STRING},
    way:{type:DataTypes.STRING},
    dostup:{type:DataTypes.STRING},
    size:{type:DataTypes.STRING},
    zav:{type:DataTypes.STRING},
    status_id:{type:DataTypes.INTEGER}
})

//T13 для ручного ввода
const HumanList = sequelize.define('humanlist',{
    id:{type:DataTypes.INTEGER,primaryKey: true,autoIncrement:true},
    name:{type:DataTypes.TEXT},
    developer:{type:DataTypes.TEXT},
    branch:{type:DataTypes.TEXT},
    onboard:{type:DataTypes.TEXT},
    term:{type:DataTypes.TEXT},
    document:{type:DataTypes.TEXT},
    tn:{type:DataTypes.TEXT},
    groups:{type:DataTypes.TEXT},
    status:{type:DataTypes.TEXT},
    gender:{type:DataTypes.TEXT},
    rk:{type:DataTypes.STRING},
    sn:{type:DataTypes.STRING},
    oklad:{type:DataTypes.STRING},
    method:{type:DataTypes.TEXT},
    month:{type:DataTypes.STRING},
    year:{type:DataTypes.STRING},
    inn:{type:DataTypes.STRING},
    birthday:{type:DataTypes.STRING},
    d1:{type:DataTypes.STRING},
    d2:{type:DataTypes.STRING},
    d3:{type:DataTypes.STRING},
    d4:{type:DataTypes.STRING},
    d5:{type:DataTypes.STRING},
    d6:{type:DataTypes.STRING},
    d7:{type:DataTypes.STRING},
    d8:{type:DataTypes.STRING},
    d9:{type:DataTypes.STRING},
    d10:{type:DataTypes.STRING},
    d11:{type:DataTypes.STRING},
    d12:{type:DataTypes.STRING},
    d13:{type:DataTypes.STRING},
    d14:{type:DataTypes.STRING},
    d15:{type:DataTypes.STRING},
    d16:{type:DataTypes.STRING},
    d17:{type:DataTypes.STRING},
    d18:{type:DataTypes.STRING},
    d19:{type:DataTypes.STRING},
    d20:{type:DataTypes.STRING},
    d21:{type:DataTypes.STRING},
    d22:{type:DataTypes.STRING},
    d23:{type:DataTypes.STRING},
    d24:{type:DataTypes.STRING},
    d25:{type:DataTypes.STRING},
    d26:{type:DataTypes.STRING},
    d27:{type:DataTypes.STRING},
    d28:{type:DataTypes.STRING},
    d29:{type:DataTypes.STRING},
    d30:{type:DataTypes.STRING},
    d31:{type:DataTypes.STRING}
})

const PeopleCounter = sequelize.define('peoplecounter',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    date:{type:DataTypes.DATE},
    numreg:{type:DataTypes.INTEGER},
    numinp:{type:DataTypes.INTEGER},
    numall:{type:DataTypes.INTEGER}
})

const Bye = sequelize.define('bye',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    user_tn:{type:DataTypes.TEXT},
    term:{type:DataTypes.TEXT},
    text:{type:DataTypes.TEXT},
    num:{type:DataTypes.INTEGER}
})
// const History = sequelize.define('history',{
//     id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
//     marker:{type:DataTypes.TEXT},
//     user_tn:{type:DataTypes.INTEGER},
//     numall:{type:DataTypes.INTEGER}
// })

const Struct = sequelize.define('structure',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.TEXT},
    factbranchs:{type: DataTypes.ARRAY(DataTypes.TEXT),defaultValue:[]},
    position:{type:DataTypes.INTEGER},
    level:{type:DataTypes.INTEGER,defaultValue:0},
    type:{type:DataTypes.INTEGER,defaultValue:0}, // 0 - list 1 - blocks
    ont13:{type:DataTypes.BOOLEAN,defaultValue:false},
    next:{type: DataTypes.ARRAY(DataTypes.INTEGER),defaultValue:[]}
})
const StructUsers = sequelize.define('structusers',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.TEXT},
    structure_id:{type:DataTypes.INTEGER},
    user_tn:{type:DataTypes.TEXT},
    onphonebook:{type:DataTypes.BOOLEAN,defaultValue:false},
    contacts:{type:DataTypes.TEXT}
})

const Reports = sequelize.define('reports',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    user_tn:{type:DataTypes.TEXT},
    report:{type: DataTypes.ARRAY(DataTypes.TEXT),defaultValue:[]},
})

const Commission = sequelize.define('commission',  {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    possion:{type:DataTypes.INTEGER},
    user_tn:{type:DataTypes.TEXT,ref:'t13uni'}, //tn пользователей  -  необходимо подтягивать всю остальную информацию по пользователям
    status:{type:DataTypes.INTEGER,defaultValue:1},
    trash:{type:DataTypes.BOOLEAN,defaultValue:false}
})
const PositionOfSoc = sequelize.define('positionsoc',  {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    from:{type:DataTypes.INTEGER},
    to:{type:DataTypes.INTEGER},
    percent:{type:DataTypes.INTEGER},
    trash:{type:DataTypes.BOOLEAN,defaultValue:false}
})
const ProgramOfSoc = sequelize.define('programofsoc',  {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.TEXT},
    description:{type:DataTypes.TEXT},
    conditions:{type:DataTypes.JSON,default:null},
    docs:{type:DataTypes.JSON,default:null},
    experience:{type:DataTypes.INTEGER},
    sum:{type:DataTypes.INTEGER},
    purpose:{type:DataTypes.BOOLEAN,defaultValue:false},
    calculation:{type:DataTypes.BOOLEAN,defaultValue:false},
    trash:{type:DataTypes.BOOLEAN,defaultValue:false}
})
const MyProgram = sequelize.define('myprogram',  {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    user_tn:{type:DataTypes.TEXT,ref:'t13uni'},
    stazh:{type:DataTypes.TEXT},
    program:{type:DataTypes.INTEGER,ref:'ProgramOfSoc'},
    docs:{type:DataTypes.JSON,defaultValue:null},
    commission:{type:DataTypes.JSON,defaultValue:null},
    boss_tn:{type:DataTypes.TEXT,ref:'t13uni'},
    trash:{type:DataTypes.BOOLEAN,defaultValue:false}
})

const ProtocolOfSoc = sequelize.define('protocolofsoc',  {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    user_tn:{type:DataTypes.STRING,ref:'t13full'},
    status:{type:DataTypes.INTEGER},
    trash:{type:DataTypes.BOOLEAN},
    check:{type:DataTypes.BOOLEAN,defaultValue:false},
    percent:{type:DataTypes.INTEGER}
})

// Промежуточная модель для связи многие-ко-многим
const MyprogramProtocol = sequelize.define('MyprogramProtocol', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const Documents = sequelize.define('documents',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING},
    file:{type:DataTypes.STRING},
    linkurl:{type:DataTypes.STRING},
    user_tn:{type:DataTypes.TEXT,ref:'t13uni'},
    za:{type:DataTypes.INTEGER,ref:'programofsoc'},
    trash:{type:DataTypes.BOOLEAN,defaultValue:false}
})

const Preregister = sequelize.define('preregister',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.TEXT},
    login:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING},
    mail:{type:DataTypes.STRING},
    tel:{type:DataTypes.STRING},
    comment:{type:DataTypes.TEXT},
    avatar:{type:DataTypes.STRING}
})

const Notifications = sequelize.define('notifications',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING},
    type_id:{type:DataTypes.INTEGER,ref:'typesnotifications'},
    title:{type:DataTypes.TEXT},
    text:{type:DataTypes.TEXT},
    user_tn:{type:DataTypes.TEXT,ref:'users'},
    link:{type:DataTypes.TEXT},
    img:{type:DataTypes.TEXT},
    file:{type:DataTypes.TEXT,defaultValue:null},
    is_read:{type:DataTypes.BOOLEAN,defaultValue:false},
    trash:{type:DataTypes.BOOLEAN,defaultValue:false}
})
const TypesNotifications = sequelize.define('typesnotifications',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING},
    img:{type:DataTypes.STRING},
})

const SrtoObjects = sequelize.define('srto',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    object:{type:DataTypes.INTEGER},
    priory:{type:DataTypes.BOOLEAN,defaultValue:false}
})

const OfferPosts = sequelize.define('offerrss',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    user_id:{type:DataTypes.INTEGER},
    content:{type:DataTypes.TEXT},
})

const History = sequelize.define('history',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    user_id:{type:DataTypes.INTEGER},
    type_id:{type:DataTypes.INTEGER},
    marker:{type:DataTypes.INTEGER,defaultValue:0}, //0-действие 1-системная ошибка 2-temps
    action:{type:DataTypes.TEXT}
})
const HistoryTypes = sequelize.define('historytypes',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.TEXT},
})

const SocketActions = sequelize.define('socketactions',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    user_id:{type:DataTypes.INTEGER},
    socket:{type:DataTypes.TEXT},
    action:{type:DataTypes.TEXT},
})

const Galary = sequelize.define('galary', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title:{type:DataTypes.TEXT},
    description:{type:DataTypes.TEXT,defaultValue:''},
    cover:{type:DataTypes.TEXT},
    looked:{type:DataTypes.INTEGER,defaultValue:0},
    user_id_likes: {type: DataTypes.ARRAY(DataTypes.INTEGER),defaultValue:[]},
    trash:{type:DataTypes.BOOLEAN,default:false}
})

const Galaryimgs = sequelize.define('galaryimgs', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    image:{type:DataTypes.TEXT},
    looked:{type:DataTypes.INTEGER},
    galary_id:{type:DataTypes.INTEGER},
    user_id_likes: {type: DataTypes.ARRAY(DataTypes.INTEGER),defaultValue:[]}
})

const Galarydocs = sequelize.define('galarydocs', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    doc:{type:DataTypes.TEXT},
    galary_id:{type:DataTypes.INTEGER}
})

const Galarycomments = sequelize.define('galarycomments', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    galary_id:{type:DataTypes.INTEGER},
    user_id:{type:DataTypes.INTEGER},
    text:{type:DataTypes.TEXT},
    trash:{type:DataTypes.BOOLEAN,default:false}
})

const Galaryimgscomm = sequelize.define('galaryimgscomm', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    image_id:{type:DataTypes.INTEGER},
    user_id:{type:DataTypes.INTEGER},
    text:{type:DataTypes.TEXT},
    trash:{type:DataTypes.BOOLEAN,default:false}
})

Galaryimgscomm.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id', as: 'user' })
User.hasMany(Galaryimgscomm, { foreignKey: 'user_id', sourceKey: 'id', as: 'imgcomm' })
Galaryimgscomm.belongsTo(Galary, { foreignKey: 'galary_id', targetKey: 'id', as: 'galary' })
Galary.hasMany(Galaryimgscomm, { foreignKey: 'galary_id', sourceKey: 'id', as: 'imgcomm' })

Galarycomments.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id', as: 'user' })
User.hasMany(Galarycomments, { foreignKey: 'user_id', sourceKey: 'id', as: 'comm' })
Galarycomments.belongsTo(Galary, { foreignKey: 'galary_id', targetKey: 'id', as: 'galary' })
Galary.hasMany(Galarycomments, { foreignKey: 'galary_id', sourceKey: 'id', as: 'comm' })

Galarydocs.belongsTo(Galary, { foreignKey: 'galary_id', targetKey: 'id', as: 'galary' })
Galary.hasMany(Galarydocs, { foreignKey: 'galary_id', sourceKey: 'id', as: 'doc' })

Galaryimgs.belongsTo(Galary, { foreignKey: 'galary_id', targetKey: 'id', as: 'galary' })
Galary.hasMany(Galaryimgs, { foreignKey: 'galary_id', sourceKey: 'id', as: 'imgs' })

OfferPosts.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id', as: 'user' })
User.hasMany(OfferPosts, { foreignKey: 'user_id', sourceKey: 'id', as: 'content' })

SrtoObjects.belongsTo(Objects, { foreignKey: 'object', targetKey: 'id', as: 'objects'})
Objects.hasMany(SrtoObjects, { foreignKey: 'object', sourceKey: 'id', as: 'srto'})

//**************************************************** Связи для Пользователей ****************************************************/
User.hasOne(T13Uni, { foreignKey: 'tn', sourceKey: 'tn' ,constraints: false})
T13Uni.belongsTo(User, { foreignKey: 'tn', targetKey: 'tn' ,constraints: false})
//**************************************************** Связи для Социалки ****************************************************/
ProgramOfSoc.hasMany(Documents, { foreignKey: 'za', as: 'documents' })
Documents.belongsTo(ProgramOfSoc, { foreignKey: 'za', as: 'program' })

MyProgram.belongsTo(ProgramOfSoc, { foreignKey: 'program', targetKey: 'id', as: 'programofsoc'})
ProgramOfSoc.hasMany(MyProgram, { foreignKey: 'program', sourceKey: 'id', as: 'myprogram'})

MyProgram.belongsTo(User, { foreignKey: 'user_tn', targetKey: 'tn', as: 'user' })
User.hasMany(MyProgram, { foreignKey: 'user_tn', sourceKey: 'tn', as: 'program_id' })

MyProgram.belongsToMany(ProtocolOfSoc, { through: MyprogramProtocol });
ProtocolOfSoc.belongsToMany(MyProgram, { through: MyprogramProtocol });

T13Uni.hasMany(Commission, { foreignKey: 'user_tn', sourceKey: 'tn',constraints: false})
T13Uni.hasMany(ProtocolOfSoc, { foreignKey: 'user_tn', sourceKey: 'tn',constraints: false})
T13Uni.hasMany(Documents, { foreignKey: 'user_tn', sourceKey: 'tn',constraints: false})

Commission.belongsTo(User,  { foreignKey: 'user_tn', targetKey: 'tn',constraints: false})
Commission.belongsTo(T13Uni,  { foreignKey: 'user_tn', targetKey: 'tn',constraints: false})
ProtocolOfSoc.belongsTo(T13Uni,  { foreignKey: 'user_tn', targetKey: 'tn',constraints: false})
Documents.belongsTo(T13Uni,  { foreignKey: 'user_tn', targetKey: 'tn',constraints: false})

//*******************************************************************************************************************************/
//**************************************************** Связи для структуры ****************************************************/
T13Uni.hasMany(Reports, { foreignKey: 'user_tn', sourceKey: 'tn',constraints: false})
Reports.belongsTo(T13Uni,  { foreignKey: 'user_tn', targetKey: 'tn',constraints: false})

T13Uni.hasMany(StructUsers, { foreignKey: 'user_tn', sourceKey: 'tn',constraints: false})
StructUsers.belongsTo(T13Uni,  { foreignKey: 'user_tn', targetKey: 'tn',constraints: false})

Struct.hasMany(StructUsers, { foreignKey: 'structure_id', sourceKey: 'id'})
StructUsers.belongsTo(Struct,  { foreignKey: 'structure_id', targetKey: 'id'})
//*******************************************************************************************************************************/
//**************************************************** Связи для сварщиков ****************************************************/
T13Uni.hasMany(CrewMans, { foreignKey: 'user_tn', sourceKey: 'tn',constraints: false})
HumanList.hasMany(CrewMans, { foreignKey: 'user_tn', sourceKey: 'tn',constraints: false})

CrewMans.belongsTo(T13Uni,  { foreignKey: 'user_tn', targetKey: 'tn',constraints: false})
CrewMans.belongsTo(HumanList, { foreignKey: 'user_tn', targetKey: 'tn',constraints: false});

CrewBase.hasMany(CrewMans, { foreignKey: 'crew_id', sourceKey: 'id' });
CrewMans.belongsTo(CrewBase, { foreignKey: 'crew_id', targetKey: 'id' });
//*******************************************************************************************************************************/
//**************************************************** Связи для BlackList ****************************************************/
T13Uni.hasMany(T13Black, { foreignKey: 'tn', sourceKey: 'tn',constraints: false})
T13Black.belongsTo(T13Uni,  { foreignKey: 'tn', targetKey: 'tn',constraints: false})
//*******************************************************************************************************************************/
T13Bye.hasMany(Bye, { foreignKey: 'user_tn', sourceKey: 'tn',constraints: false})
Bye.belongsTo(T13Bye,  { foreignKey: 'user_tn', targetKey: 'tn',constraints: false})
//*******************************************************************************************************************************/
// Messages belongs to Users (tn_to)
Messages.belongsTo(User, { foreignKey: 'tn_to', targetKey: 'tn', as: 'ToUser' })
Messages.belongsTo(User, { foreignKey: 'tn_from', targetKey: 'tn', as: 'FromUser' })
User.hasMany(Messages, { foreignKey: 'tn_to', sourceKey: 'tn', as: 'ReceivedMessages' })
User.hasMany(Messages, { foreignKey: 'tn_from', sourceKey: 'tn', as: 'SentMessages' })
//*****Notifications**************************************************************************************************************************/
User.hasMany(Notifications, { foreignKey: 'user_tn', sourceKey: 'tn' })
Notifications.belongsTo(User, { foreignKey: 'user_tn', targetKey: 'tn' })

TypesNotifications.hasMany(Notifications, { foreignKey: 'type_id' })
Notifications.belongsTo(TypesNotifications, { foreignKey: 'type_id' })

//*****КонкурсСЮрезами*********************************************************************************//*
User.hasMany(KidsAnswers, { foreignKey: 'user_id', sourceKey: 'id' })                           //*
KidsAnswers.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' })                         //*
Nominations.hasMany(KidsAnswers, { foreignKey: 'nomination_id', sourceKey: 'id' })              //*
KidsAnswers.belongsTo(Nominations, { foreignKey: 'nomination_id', targetKey: 'id' })            //*
User.hasMany(Contest, { foreignKey: 'user_id', sourceKey: 'id' })                               //*
Contest.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' })                             //*
Contest.hasMany(KidsAnswers, { foreignKey: 'contest_id', sourceKey: 'id' })                     //*
KidsAnswers.belongsTo(Contest, { foreignKey: 'contest_id', targetKey: 'id' })                   //*
//*****************************************************************************************************//*

//******************************************************************************************************
History.belongsTo(User, { foreignKey: 'user_id' })
History.belongsTo(HistoryTypes, { foreignKey: 'type_id' })

User.hasMany(History, { foreignKey: 'user_id' })
HistoryTypes.hasMany(History, { foreignKey: 'type_id' })
//******************************************************************************************************
SocketActions.belongsTo(User, { foreignKey: 'user_id' })
User.hasMany(SocketActions, { foreignKey: 'user_id' })

/***********************************************************************/
const Message = sequelize.define('cmessage', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    author_id:{type:DataTypes.INTEGER, allowNull: false, references: { model: 'users', key: 'id' } },
    text:{type:DataTypes.TEXT},
    voice:{type: DataTypes.TEXT},
    sees:{type: DataTypes.ARRAY(DataTypes.INTEGER),defaultValue: []},
    important:{type: DataTypes.ARRAY(DataTypes.INTEGER),defaultValue: []},
    trash:{type: DataTypes.ARRAY(DataTypes.INTEGER),defaultValue: []},
    onchange:{type:DataTypes.BOOLEAN,defaultValue:false},
    forwarded:{type:DataTypes.BOOLEAN,defaultValue:false},
    service:{type:DataTypes.BOOLEAN,defaultValue:false}
})
const Chat = sequelize.define('chat', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.TEXT,defaultValue: ''},
    image:{type:DataTypes.TEXT,defaultValue: ''},
    creator_id:{type:DataTypes.INTEGER},
    ongroup:{type:DataTypes.BOOLEAN,defaultValue:false},
    trash:{type: DataTypes.ARRAY(DataTypes.INTEGER),defaultValue: []},
    archive:{type: DataTypes.ARRAY(DataTypes.INTEGER),defaultValue: []},
})
const MessageFiles = sequelize.define('messagefiles', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    message_id: { type: DataTypes.INTEGER, references: { model: Message, key: 'id' } },
    name:{type:DataTypes.TEXT},
    path:{type:DataTypes.TEXT}

})
const ChatMessage = sequelize.define('ChatMessage', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})
const ChatUser = sequelize.define('ChatUser', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const DopShirfs = sequelize.define('dopshifrs', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.TEXT,defaultValue: ''},
    object_id:{type:DataTypes.TEXT,defaultValue: ''},
    month:{type:DataTypes.TEXT,defaultValue: ''},
    year:{type:DataTypes.TEXT,defaultValue: ''}
})


Chat.belongsToMany(Message, { through: ChatMessage })
Chat.belongsToMany(User, { through: ChatUser })
Message.belongsToMany(Chat, { through: ChatMessage })
User.belongsToMany(Chat, { through: ChatUser })
Message.hasMany(MessageFiles, { foreignKey: 'message_id' })
MessageFiles.belongsTo(Message, { foreignKey: 'message_id' })

Chat.belongsTo(User, { foreignKey: 'creator_id' })
User.hasMany(Chat, { foreignKey: 'creator_id' })
Message.belongsTo(User, { foreignKey: 'author_id' })
User.hasMany(Message, { foreignKey: 'author_id' })

ChatUser.belongsTo(User, { foreignKey: 'userId' })
User.hasMany(ChatUser, { foreignKey: 'userId' })

/***********************************************************************/

module.exports = {
    DopShirfs,Galary,Galaryimgs,Galarydocs,Galarycomments,Galaryimgscomm,ChatUser,ChatMessage,MessageFiles,Chat,Message,SocketActions,History,HistoryTypes,OfferPosts, SrtoObjects, MyprogramProtocol,Preregister,Notifications,TypesNotifications,ProgramOfSoc, MyProgram, T13Black,Commission,PositionOfSoc,Reports,Struct,StructUsers,Bye,PeopleCounter,T13Bye,T13Uni,CrewMans,ZaSv,TableZayavka,HumanList,KtuDoc,KtuList,MessageSv,ViewsWorkSv,CrewManlist,CrewDoclist,CrewBase,CrewSv,OgmPrice,WorkPrice,StatementsSimples,TaskGroups,Priority,Tasks,TaskConnections,TaskDocs,TaskResults,TaskChains,Statuses,PostComments,Messages,Managers,MainBlocks,Contest,Nominations,KidsAnswers,User,T13,Company,TableTabel,TabelSv,YmSvarka,Days,NumberObjects,Objects,ObjectsSV,Token,Phonebook,Jobs,Payslip,Ymshifr,Files,DiskSpace,Survey,Question,Answer,BestBoard,Posts,ProtocolOfSoc
}