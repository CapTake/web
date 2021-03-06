//p2p

const messages = {
  p2p_need_username: '要使用P2P服务，请选择一个昵称。请注意，您仅能输入一个昵称。',
  action: {
    'publish-advert': '发布广告',
    'return_to_adverts': '返回广告列表',
    'on': '开',
    'off': '关',
    'add': '添加',
    'create': '创建',
    'delete': '删除',
    'open': '打开',
    'close': '关闭',
    'pause': '暂停',
    'read': '读取',
    'cancel': '取消',
    'canceled': '已取消',
    'search': '搜索',
    'send': '发送',
    'clear': '清除',
    'back': '返回',
    'save': '保存',
    'take': '取',
    'like': '喜欢',
    'dislike': '不喜欢',
    'register-for-free': '免费注册',
    'buy': '购买',
    'sell': '出售',
    'quick-buy': '快速购买',
    'quick-sell': '快速出售',
    'buy-online': '在线购买',
    'buy-offline': '离线购买',
    'sell-online': '在线出售',
    'sell-offline': '离线出售',
    'show-more': '显示更多',
    'details': '详细信息',
    'setting': '设置',
    'my-adverts': '我的广告',
    'order-active': '活动订单',
    'order-completed': '已完成订单',
    'order-canceled': '取消订单',
    'processing': '正在处理...',
    'not-register': '还未注册？',
    'password-recovery': ' 密码找回',
    'is-register': '已经有帐户？',
    'new_wallet': '新钱包',
    'add_hash': '添加新散列',
    'send_request': '发送请求',
    'complain': '投诉',
    'activate': '激活',
    'deactivate': '取消激活',
    'ask-qrcode': '询问二维码',
    'update': '更新',
    need_update_search: '需要更新搜索',
    copy: '复制',
    editing: '正在编辑',
    create_order: '创建订单',
    edit: '编辑',
    return_list: '返回列表',
  },
  message: {
    p2p_shot_info: '要了解如何使用P2P服务，请阅读简要指南。',
    p2p_need_username: '要使用P2P服务，请选择一个昵称。请注意，您仅能输入一个昵称。',
    refresh_page_and_return: '刷新页面或返回主页。',
    return_to_list_wallet: '返回到钱包列表。',
    select_location: '选择位置',
    price_rate: '当前市场价值的交易价格',
    not_pair_rates: '您的货币对的费率未找到',
    title_currency_buy: '出售货币%{currency}',
    title_currency_sell: '购买货币%{currency}',
    question_sell: '您希望出售多少？',
    question_buy: '您希望购买多少？',
    user_last_seen: '用户上次上线时间是%{time}',
    order_low_buy: '您可为本广告购买的最低金额是%{value} %{currency}',
    order_high_buy: '您可为本广告购买的最高金额是%{value} %{currency}',
    order_low_sell: '您可为本广告出售的最低金额是%{value} %{currency}',
    order_high_sell: '您可为本广告出售的最高金额是%{value} %{currency}',
    direct_exchange_rate: '直接汇率',
    reverse_exchange_rate: '逆向汇率',
    order_confirm_warning: `启用自动接受订单后，您同意客户可以开始执行，您有%{minutes}分钟的时间完成订单。`,
    exchange_currency_sell: '您希望出售的货币',
    'payment-currency_sell': '您希望接受的货币',
    exchange_currency_buy: '您希望购买的货币',
    'payment-currency_buy': '您希望兑换的货币',
    order_confirm_text: '开始处理%{payment}兑换%{exchange}的交易？',   refresh_rate_order: '广告已更新费率。继续？',
    show_order: '广告已显示',
    hide_order: '广告已隐藏',
    error_send_message: '发送邮件时出现错误。',
    success_send_message: '邮件已发送。',
    code_send_to_email: '代码已发送到电子邮件。',
    quest_activation_code: '请求激活码。',
    request_success_activation: '激活电子邮件已重新发送给您'
  },
  form: {
    'all': '全部',
    'title': '标题',
    'description': '描述',
    'sms-verified': 'SMS已验证',
    'sms-not-required': '无需SMS',
    'id-not-required': '无需ID',
    'seller': '卖家',
    'country': '国家',
    'rate': '费率',
    'price': '价格',
    'location': '位置', 'password': '密码',
    'optional-field': '可选字段',
    'email': '电子邮件',
    'all-adverts': '所有广告',
    'username': '用户名',
    'currency': '货币',
    'amount': '金额',
    'limits': '限额',
    'type': '类型',
    'amount-min': '最低金额',
    'amount-min-info': '最低交易限额',
    'amount-max': '最高金额',
    'amount-max-info': '最高交易限额',
    'amount-limit': '金额限额',
    'payment-method': '付款方法',
    'payment-system': '付款系统',
    'payment-rate': '一种货币兑换单位的费率',
    'payment-currency': '付款货币',
    'status': '状态',
    'date-created': '创建日期',
    'date-updated': '已更新',
    'select-currency': '选择货币',
    'order-type': '订单类型',
    'additional-info': '其他信息',
    'field-required': '字段必填',
    'select_currency': '选择货币',
    'balance': '余额',
    'refill': '存款',
    'withdraw': '取款',
    'hash': '散列',
    'price_per_unit': '每单位价格',
    'comment': '注释',
    'buy': '购买',
    'your_message': '您的邮件...',
    'field_require': '字段必填',
    'paymentway': '付款系统',
    'address': '地址',
    'time-expired-minutes': '时间到期(Minutes)',
    'select': '选择',
    'numeric-code': '数字代码',
    'wexcode_next': '请重试',
    'city': '城市',
    'exchange_currency': '兑换货币',
    'select_type_advert': '选择广告类型',
    tfa_code: 'TFA代码',
    platform: '平台',
    autoconfirmation_order: '自动确认',
    user_price: '用户价格',
    price_from_platform: '来自平台的价格',
    profit: '利润',
    order: '订单',
    user_buyer: '买家',
    user_seller: '卖家',
    exchange_currency_sell: '您希望出售的货币',
    'payment-currency_sell': '您希望接受的货币',
    exchange_currency_buy: '您希望购买的货币',
    'payment-currency_buy': '您希望兑换的货币',
  },
};
const newError = {
  "32700": "服务器上出现未知错误",
  "32701": "服务器上出现未知错误",
  "32702": "服务器上出现未知错误",
  "32703": "API方法未找到",
  "32704": "会话无效",
  "32705": "会话无效",
  "32706": "错误的TFA代码",
  "32707": "错误的TFA代码",
  "40000": "货币未找到",
  "40001": "货币未找到",
  "40002": "无效的货币类型",
  "41000": "钱包未创建",
  "41001": "无效的优惠券",
  "41002": "无效的优惠券",
  "41003": "输入代码WEX时出现错误",
  "41004": "无效的散列地址",
  "41005": "钱包未找到",
  "41006": "资金不足",
  "41007": "资金不足",
  "41008": "资金不足",
  "41009": "错误：创建交易失败",
  "41010": "卖家未找到",
  "41011": "买家未找到",
  "41012": "卖家未找到",
  "41013": "买家未找到",
  "42000": "付款系统未找到",
  "43000": "付款系统未找到",
  "43001": "付款系统未找到",
  "44000": "I try未找到",
  "44001": "I try未找到",
  "45000": "交易时间未指定",
  "45001": "交易时间未指定",
  "45002": "汽车电池未指定",
  "45003": "汽车电池未指定",
  "45004": "交易类型未指定",
  "45005": "交易类型未指定",
  "45006": "最低金额不正确", "45007": "最高金额不正确",
  "45008": "最高兑换金额无效",
  "45009": "最高兑换金额无效",
  "45010": "位置未指定",
  "45011": "费率未指定",
  "45012": "费率未指定",
  "45013": "费率未指定",
  "45014": "费率未指定",
  "45015": "平台费率未指定",
  "45016": "平台费率未指定",
  "45017": "利率值未指定",
  "45018": "利率值未指定",
  "45019": "费率未指定",
  "45020": "创建广告的资金不足",
  "45021": "创建广告失败",
  "45022": "广告未找到",
  "45023": "交易状态未指定",
  "45024": "交易状态未指定",
  "45025": "更改交易状态失败",
  "45026": "广告未找到",
  "45027": "更新广告出现错误",
  "46000": "交易未找到",
  "46001": "交易未找到",
  "46002": "令牌未指定",
  "46003": "令牌未指定",
  "46004": "交易金额未指定",
  "46005": "交易金额未指定",
  "46006": "创建交易失败",
  "46007": "无法更改交易状态",
  "46008": "交易未更新",
  "46009": "交易状态未指定",
  "46010": "交易状态未指定",
  "47000": "不要指定邮件类型",
  "47001": "不要指定邮件类型",
  "47002": "邮件为空",
  "47003": "邮件为空",
  "47004": "发送失败",
  "47005": "邮件Id已指定",
  "47006": "发送失败",
  "48000": "位置未指定",
  "48001": "位置未指定",
  "49000": "创建钱包时出现错误",
  "50000": "发送时出现错误",
  "50001": "指定评估",
  "50002": "指定评估",
  "50003": "需要注释",
  "51000": "用户未找到",
  "51001": "电子邮件未指定",
  "51002": "无效的电子邮件格式",
  "51003": "电子邮件已在使用中",
  "51004": "用户名未指定",
  "51005": "无效的用户名格式",
  "51006": "用户名已在使用中",
  "51007": "密码未指定",
  "51008": "无效的密码",
  "51009": "超出限额日志",
  "51010": "更改密码失败",
  "51011": "注册时出现错误",
  "51012": "无效的激活代码未找到",
  "51013": "无效的激活代码未找到",
  "51014": "激活用户失败",
  "51015": "对于给定用户操作不可用。",
  "51016": "指定TFA的状态",
  "51017": "TFA已激活",
  "51018": "TFA类型未指定",
  "51019": "错误类型TFA",
  "52000": "输入API的名称",
  "52001": "无效的名称格式",
  "52002": "创建API失败",
  "52003": "API未找到",
  "52004": "API未找到",
  "52005": "更新API失败",
  "52006": "API密钥未找到",
  "52007": "无效的API密钥",
  "52008": "更新API失败",
  "52009": "更新API失败",
  "52010": "更新API失败",
  "52011": "更新API失败",
  "53000": "Ip未找到",
  "53001": "Ip未找到",
  "53002": "添加IP失败",
  "53003": "移除IP失败",
  "53004": "Ip未找到",
  "54000": "无法更新API",
  "54001": "无法更新API",
  "54002": "无法更新API",
  "51020": "验证码未激活",
  "51021": "验证码验证失败",
  "51022": "可在60秒后重新发送激活电子邮件",
  "51015_activation_request": "您的帐户已激活。<a href='/user/login'>Welcome</a>" ,
  "51000_activation_request": "可能您输入错误或电子邮件未注册。"
};
const error = {
  'error': '错误',
  'order-not-found': '没有带此类状态的订单',
  '404': '页面未找到',
  ...newError,
  error_send_code: '出现错误，代码未发送。请重试。',
  error_check_data: '请检查输入的数据',
  invalid_ip: 'Ip地址的格式无效',
  advert_create: {
    '-33001': '类型未找到',
    '-33002': '类型无效',
    '-33003': '货币未找到',
    '-33004': '货币无效',
    '-33005': `最小交易限值不得小于零`,
    '-33006': `金额限值不得小于零`,
    '-33007': `最小交易限额不得超过最大交易限额`,
    '-33008': `金额限额未找到`,
    '-33009': `金额限额无效`,
    '-33010': `金额限值不得小于最小交易限额`,
    '-33011': `付款货币未找到`,
    '-33012': `付款货币无效`,
    '-33013': `字段"兑换货币"等于"付款货币"`,
    '-33014': '一种货币交换单位的费率未找到',
    '-33015': '一种货币交换单位的费率无效',
    '-33016': '付款系统未找到',
    '-33017': '付款系统不存在',
    '-33018': '国家未找到',
    '-33019': '国家不存在',
    '-33020': '到期时间未找到',
    '-33021': '到期时间无效',
    '-33022': '位置无效',
    '-33023': '钱包不存在',
    '-33024': '余额未找到',
    '-33025': '创建广告时出现错误',
    '-33037': '余额未找到',
  },
  advert_info: {
    '-33001': '广告Uuid未找到',
    '-33002': '广告不存在',
  },
  advert_set_status: {
    '-33001': '广告Uuid未找到',
    '-33002': '广告状态未找到',
    '-33003': '广告状态无效',
    '-33004': '广告不存在',
    '-33005': '订单状态错误',
  },
  event_create: {
    '-33001': '订单Uuid未找到',
    '-33002': '订单不存在',
    '-33003': '禁止本订单的访问',
    '-33004': '类型未找到',
    '-33005': '类型无效',
    '-33006': '值未找到',
    '-33007': '值无效',
    '-33008': '创建活动时出现错误',
  },
  order_create: {
    '-33001': 'Advert_id未找到',
    '-33002': '广告不存在',
    '-33003': '金额未找到',
    '-33004': '金额无效',
    '-33005': '帐户不存在',
    '-33006': '余额未找到',
    '-33007': '创建订单时出现错误',
    '-33008': '订单状态错误',
  },
  order_event_list: {
    '-33001': '订单Uuid未找到',
    '-33002': '订单不存在',
    '-33003': '禁止本订单的访问',
  },
  order_info: {
    '-33001': '订单Uuid未找到',
    '-33002': '订单不存在',
  },
  order_info_details: {
    '-33001': '订单Uuid未找到',
    '-33002': '订单不存在',
  },
  order_set_status: {
    '-33001': '订单Uuid未找到',
    '-33002': '订单不存在',
    '-33003': '订单状态未找到',
    '-33004': '订单状态无效',
    '-33005': '不允许设置状态',
  },
  place_search: {
    '-33001': '国家未找到',
    '-33002': '国家不存在',
    '-33003': '搜索未找到',
    '-33004': '未知错误',
  },
  user_auth_tfa_enable: {
    '-33001': '启用未找到',
  },
  user_login: {
    '-33001': '电子邮件未找到',
    '-33002': '电子邮件无效',
    '-33003': '密码未找到',
    '-33004': 'Param密码无效',
    '-33005': '错误的电子邮件或密码',
    '-33006': '用户未激活',
    '-33007': '错误的电子邮件或密码',
    '-33008': '错误的电子邮件或密码',
    '-33009': '错误的电子邮件或密码',
    '-33010': '超出登录限制'
  },
  advert_update: {
    '-33024': '更新广告时出错',
  },
  common_error: {
    '-32000': '服务器出现错误',
    '-32007': '会话无效',
    '-32008': '会话无效',
    '-32009': '无效的TFA代码',
    '-32010': '错误的电子邮件地址'
  },
};

const p2p = { ...messages, error };


export default {
  form: {
    email: '电子邮件',
    password: '密码',
    confirm_pwd: '确认密码',
    auth_code: '验证码',
    your_login: '您的登录',
    login: '登录',
    enter_google_2fa_code: '请输入6位数代码',
    old_pwd: '旧密码',
    new_pwd: '新密码',
    title: '标题',
    expired_time: '过期时间',
    currency: '货币',
    amount: '数量',
    select_currency: '选择货币',
    send_to: '发送到',
    ...p2p.form,
  },
  action: {
    login: '登录',
    create_acc: '新建帐户',
    authenticate: '验证',
    cancel: '取消',
    restore: '还原',
    change: '变更',
    show_qr: '显示二维码',
    enable: '启用',
    save_qr: '保存二维码',
    disable: '禁用',
    create: '创建',
    add: '添加',
    save: '保存',
    copy: '复制',
    send: '发送',
    exchange: '交换',
    ...p2p.action
  },
  page: {
    activation_acc: '帐户激活',
    sign_in: '登入',
    sign_up: '注册',
    sign_out: '登出',
    create_your_acc: '创建您的账户',
    forgot_pwd: '忘记密码？',
    not_registered: '还没有帐户？现在创建。',
    already_registered: '是否已经有一个帐户？登入。',
    success_registered: '感谢您的注册！已发送激活说明至您的电子邮箱。',
    success_activated_acc: '您的帐户已成功激活。',
    error_activated_acc: '发生错误。您的帐户尚未激活。',
    request_new_pwd: '设置新密码',
    success_recovery_mail_pwd: '成功！已发送密码恢复说明至您的电子邮箱。',
    enable_2fa: '启用两步验证',
    disable_2fa: '禁用两步验证',
    text_google_2fa: `为了您的账户安全，请激活双因素认证（2FA）。为此，您需要6位数代码。如需获得该代码，请下载Google Authenticator，并扫描二维码。`,
    text_google_2fa_disable: `如果您想关闭2FA，请输入Google Authenticator应用程序所提供的6位数代码，然后点击"禁用"。`,
    qr_code: '二维码',
    your_secret_key: '您的密钥',
    change_password: '修改密码',
    create_user_api: '创建用户API',
    title: '标题',
    date: '日期',
    status: '状态',
    active: '激活',
    deactive: '取消激活',
    have_not_api_key: '您没有这个密钥',
    your_api_keys: '您的API密钥',
    api_methods_acc: '方法帐户',
    api_convert_currency: '方法转换货币',
    api_withdraw: '方法取款',
    actions: '操作',
    ip_address: 'IP地址',
    settings: '设置',
    make_deposit: '存款',
    autoconvert_into_cnx: '自动转换至CNX',
    deposit_qr: '通过扫描下面的二维码存款',
    deposit_copy: '或直接存入',
    choose_withdraw_type: '选择一种取款类型',
    you_give: '支付币种',
    you_receive: '接收币种',
    exchange_rate: '汇率',
    fee: '费用',
    pair: '货币对',
    price: '价格',
    volume: '成交量',
    charts: '图表',
    today: '今天',
    this_week: '本周',
    all: '全部',
    this_month: '本月',
    last_month: '上个月',
    this_year: '今年',
    previous: '上一个',
    next: '下一个',
    deposit: '存款',
    transactions:'交易',
    withdraw:'取款',
    exchange:'交换',
    restore:  '还原',
    balances:  '余额',
    fiat: '许可'
  },
  message: {
    success: '成功',
    status_change_autoconvert_into_cnx: '状态已更改成功。',
    ...p2p.message,
  },
  error: {
    fill_all_field: '填写所有字段！',
    wrong_user: '拒绝访问：用户或密码错误',
    not_activated_acc: '已向您发送一条消息，其中包含指向您的电子邮件的链接。请遵循该消息中的链接来激活您的账户。',
    invalid_auth_key:  '验证码无效！',
    invalid_format:  '格式无效，%{field}！',
    unknown_error:  '未知错误！',
    enter_6_dig:  '输入6位数代码',
    register_error:  '注册时发生错误！',
    different_pwd:  '密码不同！ ',
    fail_change_pwd:  '更改密码失败！',
    wrong_user_restore_pwd:  '用户错误！',
    fail_activated_2fa:  '激活2FA失败！',
    is_empty: '%{field}为空！',
    should_num: '%{field}应该是数字！ ',
    error_send: '错误发送',
    error: '错误',
    exchange_not_balance: '您可能没有足够的资金在账户中执行交易。'
  },
  fee: {
    cnx: '最低金额 = 0.001 CNX |无费用',
    btc: '最低金额 = 0.002 BTC |费用 = 0.001 BTC',
    eth: '最低金额 = 0.002 ETH | 费用 = 0.001 ETH'
  },
  statusTransaction: {
    created: '已创建',
    moderated: '已审核',
    unconfirmed: '未确认',
    confirmed: '已确认',
    admin_moderate_success: '已获管理员批准',
    admin_moderate_cancel: '已被管理员取消',
    admin_moderate_wait: '已由管理员审核',
    moderate: '审核'
  },
  validate: {
    'empty_field': '字段不得为空',
    'empty_fields': '所有字段不得为空',
    'invalid_email': '电子邮件必须有效',
    'invalid_username': '无效的用户名',
    'invalid_repassword': '密码不匹配',
    'invalid_select_currency': '您必须选择一种货币',
    'invalid_password_short': '您的密码必须至少长8个字符',
  },
  menu: {
    'buy': '购买',
    'sell': '出售',
    'guide': '指南',
    'support': '支持',
    'terms-of-service': '服务条款',
    'orders': '订购',
    'rates': '评价'
  },
  user: {
    'user': '用户',
    'registration': '注册',
    'login': '登录',
    'logout': '注销',
    'account': '帐户',
    'profile': '个人资料',
    'username': '用户名',
    'password': '密码',
    'name': '姓名',
    'phone': '电话',
    'adverts': '广告',
    'wallet': '钱包'
  },
  order_status: {
    created_buyer: '等待供应商确认',
    accepted_buyer: '等待买家资金转账',
    paid_buyer: '已付款',
    moderated_buyer: '调整中',
    confirmed_buyer: '已确认',
    completed_buyer: '交易成功',
    timeout_confirmed_buyer: '交易时间到期，已经完成转账',
    canceled_buyer: '交易被卖家取消',
    timeout_canceled_buyer: '交易时间到期',
    created_seller: '等待买家确认',
    accepted_seller: '等待买家资金转账',
    paid_seller: '已付款',
    moderated_seller: '调整中',
    confirmed_seller: '已确认',
    completed_seller: '交易成功',
    timeout_complete_seller: '交易时间到期，已经完成转账',
    canceled_seller: '交易被买家取消',
    timeout_canceled_seller: '交易时间到期'
  },
  status_adverts: {
    actived: '活动',
    removed: '已移除',
    canceled: '不活动',
  },
  status_orders: {
    created: '等待批准',
    accepted: '等待转账',
    paid: '已付款',
    moderated: '调整',
    confirmed: '已确认',
    completed:'交易成功完成',
    timeout_confirmed: '交易时间到期',
    timeout_canceled: '交易时间到期',
    canceled: '交易已取消'
  },
  user_status: {
    activated: '用户已激活',
    blocked: '用户被冻结'
  },
  "coupon": {
    "checking_coupon": "卡片校验",
    "scanning_coupon": "扫描卡片",
    "begin_scanning_coupon": "扫描卡片",
    "not_access_camera": "您需要授权相机访问权限并刷新页面",
    "coupon": "卡片",
    "check": "校验",
    "create_coupon": "新建代码",
    "time_of_action": "操作时间",
    "receiver": "收款人",
    "select_currency": "选择一种货币",
    "activate_coupon": "激活卡片",
    "apply_coupon": "卡片b补发",
    "apply": "存款",
    "deactivate_coupon": "取消激活卡片",
    "deactivate": "取消激活",
    "information": "卡片相关信息",
    "creator": "所有者",
    "given": "密码保护",
    "not_given": "没有密码保护",
    "time_of_redeem": "激活时间",
    "invalid_qrcode": "无效的Qr码",
    "check_coupon_fail": "未找到卡片数据",
    "field_empty": "Field \"%{field}\" 应填写",
    "take_currency": "您需要指定一种货币",
    "success_create_coupon": "卡片已成功创建",
    "error_length_comment": "评论超出允许的字符数（255）",
    "error_create_coupon": "创建卡片过程中发生错误",
    "need_password": "您需要指定一个密码",
    "activate_coupon_success": "卡片已激活",
    "activate_coupon_error": "激活片过程中发生错误",
    "not_found_coupon": "未找到卡片",
    "coupon_was_used": "卡片已被使用",
    "fail_apply_coupon": "无法补发卡片",
    "coupon_refilled": "卡片已补发",
    "your_coupon": "您的卡片",
    "optional_field": "不需要",
    "types": {
      "debit": "卡片",
      "empty": "一次性卡片",
      "joker": "大王卡"
    },
    "status": {
      "actived": "未激活",
      "redeemed": "已支付",
      "created": "等待补发"
    }
  }
}
