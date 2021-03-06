//p2p

const messages = {
  p2p_need_username: 'P2P 서비스를 사용하려면 닉네임을 선택하십시오. 주의! 닉네임은 한 번만 입력할 수 있습니다.',
  action: {
    'publish-advert': '광고 개시',
    'return_to_adverts': '광고 목록으로 돌아가기',
    'on': '켜기',
    'off': '끄기',
    'add': '추가',
    'create': '생성',
    'delete': '삭제',
    'open': '열기',
    'close': '닫기',
    'pause': '멈추기',
    'read': '읽기',
    'cancel': '취소',
    'canceled': '취소 완료',
    'search': '검색',
    'send': '보내기',
    'clear': '지우기',
    'back': '뒤로 가기',
    'save': '저장',
    'take': '테이크',
    'like': '좋아요',
    'dislike': '싫어요',
    'register-for-free': '무료 등록',
    'buy': '매입',
    'sell': '매도',
    'quick-buy': '빠른 매입',
    'quick-sell': '빠른 매도',
    'buy-online': '온라인 매입',
    'buy-offline': '오프라인 매입',
    'sell-online': '온라인 매도',
    'sell-offline': '오프라인 매도',
    'show-more': '더 보기',
    'details': '상세사항',
    'setting': '설정',
    'my-adverts': '나의 광고',
    'order-active': '진행 중인 주문',
    'order-completed': '완료된 주문',
    'order-canceled': '취소된 주문',
    'processing': '처리 중...',
    'not-register': '아직 등록하지 않으셨나요?',
    'password-recovery': '비밀번호 복구',
    'is-register': '이미 계정이 있으신가요?',
    'new_wallet': '신규 지갑',
    'add_hash': '새 해시 추가',
    'send_request': '요청 보내기',
    'complain': '불만사항',
    'activate': '활성화하기',
    'deactivate': '비활성화하기',
    'ask-qrcode': 'Qr 코드 묻기',
    'update': '업데이트',
    need_update_search: '검색 업데이트 필요',
    copy: '복사',
    editing: '편집',
    create_order: '주문 생성',
    edit: '편집',
    return_list: '목록으로 돌아가기',
  },
  form: {
    'all': '전체',
    'title': '제목',
    'description': '설명',
    'sms-verified': 'SMS가 확인되었습니다.',
    'sms-not-required': 'SMS는 필요하지 않습니다.',
    'id-not-required': 'ID는 필요하지 않습니다.',
    'seller': '매도자',
    'country': '국가',
    'rate': '요율',
    'price': '가격',
    'location': '위치', 'password': '비밀번호',
    'optional-field': '선택 입력란',
    'email': '이메일',
    'all-adverts': '전체 광고',
    'username': '사용자 이름',
    'currency': '통화',
    'amount': '금액(수량)',
    'limits': '한도',
    'type': '유형',
    'amount-min': '최소 금액(수량)',
    'amount-min-info': '최소 거래 한도',
    'amount-max': '최대 금액',
    'amount-max-info': '최대 거래 한도',
    'amount-limit': '금액(수량) 한도',
    'payment-method': '지불 방식',
    'payment-system': '지불 시스템',
    'payment-rate': '통화 유닛의 교환 비율',
    'payment-currency': '지급 통화',
    'status': '상태',
    'date-created': '생성 날짜',
    'date-updated': '업데이트 완료',
    'select-currency': '통화 선택',
    'order-type': '주문 유형',
    'additional-info': '추가 정보',
    'field-required': '필수 입력란입니다.',
    'select_currency': '통화를 선택하십시오.',
    'balance': '잔고',
    'refill': '예금',
    'withdraw': '출금',
    'hash': '해시',
    'price_per_unit': '유닛 당 가격',
    'comment': '의견',
    'buy': '매수',
    'your_message': '귀하의 메시지는...',
    'field_require': '필수 입력란입니다.',
    'paymentway': '지불 시스템',
    'address': '주소',
    'time-expired-minutes': '시간 만료(분)',
    'select': '선택',
    'numeric-code': '숫자 코드',
    'wexcode_next': '다시 시도해 주십시오.',
    'city': '도시',
    'exchange_currency': '환전',
    'select_type_advert': '광고 유형을 선택하십시오.',
    tfa_code: 'TFA 코드',
    platform: '플랫폼',
    autoconfirmation_order: '자동 확정',
    user_price: '사용자 가격',
    price_from_platform: '플랫폼 가격',
    profit: '수익',
    order: '주문',
    user_buyer: '매입자',
    user_seller: '매도자',
    exchange_currency_sell: '매도하려는 통화',
    'payment-currency_sell': '수령하려는 통화',
    exchange_currency_buy: '매입하려는 통화',
    'payment-currency_buy': '교환하려는 통화',
  },
  message: {
    p2p_shot_info: 'P2P 서비스 사용 방법을 배우려면 간단한 안내서를 읽으십시오.',
    p2p_need_username: 'P2Pサービスで使用するニックネームを決めてください。ニックネームは変更できませんので、ご注意ください。',
    refresh_page_and_return: '페이지를 새로 고치거나 메인 페이지로 돌아갑니다.',
    return_to_list_wallet: '지갑 목록으로 돌아갑니다.',
    select_location: '위치를 선택하십시오.',
    price_rate: '현 시장가에 연동한 거래 가격',
    not_pair_rates: '귀하의 통화쌍 환율을 찾을 수 없습니다.',
    title_currency_buy: '통화 매도 %{currency}',
    title_currency_sell: '통화 매수 %{currency}',
    question_sell: '얼마나 매도하시길 원하십니까?',
    question_buy: '얼마나 매수하시길 원하십니까?',
    user_last_seen: '최근 온라인 이용 %{시간}',
    order_low_buy: '이 광고를 위한 최소 매수 가격은 %{value} %{currency}',
    order_high_buy: '이 광고를 위한 최대 매수 가격은 %{value} %{currency}',
    order_low_sell: '이 광고를 위한 최소 매도 가격은 %{value} %{currency}',
    order_high_sell: '이 광고를 위한 최대 매도 가격은 %{value} %{currency}',
    direct_exchange_rate: '직접 교환 비율',
    reverse_exchange_rate: '역(reverse) 교환 비율',
    order_confirm_warning: ' 주문 자동수락 기능을 사용한다는 것은, 고객에 의해 실행이 시작되며 귀하께서 %{minutes}내에 주문을 완료하는 것에 동의한다는 것을 의미합니다.',
    exchange_currency_sell: '매도하려는 통화',
    'payment-currency_sell': '수령하려는 통화',
    exchange_currency_buy: '매입하려는 통화',
    'payment-currency_buy': '교환하려는 통화',
    order_confirm_text: '%{exchange}와 %{payment}를 교환하는 거래를 시작하시겠습니까?',
    refresh_rate_order: '광고 요율이 업데이트되었습니다. 계속하시겠습니까?',
    show_order: '광고 보이기',
    hide_order: '광고 숨김',
    error_send_message: '메시지를 보내는 동안 오류가 발생했습니다.',
    success_send_message: '메시지가 전달되었습니다.',
    code_send_to_email: '코드가 이메일로 전송되었습니다.',
    quest_activation_code: '활성화 코드 요청',
    request_success_activation: '활성화 이메일이 다시 전송되었습니다.',
  },
};
const newError = {
  "32700": "알 수 없는 서버 오류",
  "32701": "알 수 없는 서버 오류",
  "32702": "알 수 없는 서버 오류",
  "32703": "API 메서드를 찾을 수 없습니다.",
  "32704": "세션이 유효하지 않습니다.",
  "32705": "세션이 유효하지 않습니다.",
  "32706": "잘못된 TFA 코드",
  "32707": "잘못된 TFA 코드",
  "40000": "통화를 찾을 수 없습니다.",
  "40001": "통화를 찾을 수 없습니다.",
  "40002": "유효하지 않는 통화 유형",
  "41000": "지갑이 생성되지 않았습니다.",
  "41001": "유효하지 않는 쿠폰",
  "41002": "유효하지 않는 쿠폰",
  "41003": "WEX 코드 입력 시 오류",
  "41004": "유효하지 않는 해시-주소",
  "41005": "지갑을 찾을 수 없습니다.",
  "41006": "자금 부족",
  "41007": "자금 부족",
  "41008": "자금 부족",
  "41009": "오류: 거래 생성 실패",
  "41010": "매도자를 찾을 수 없습니다.",
  "41011": "매입자를 찾을 수 없습니다.",
  "41012": "매도자를 찾을 수 없습니다.",
  "41013": "매입자를 찾을 수 없습니다.",
  "42000": "지불 시스템을 찾을 수 없습니다.",
  "43000": "지불 시스템을 찾을 수 없습니다.",
  "43001": "지불 시스템을 찾을 수 없습니다.",
  "44000": "찾을 수 없습니다.",
  "44001": "찾을 수 없습니다.",
  "45000": "거래 시간이 지정되지 않았습니다.",
  "45001": "거래 시간이 지정되지 않았습니다.",
  "45002": "오토배테리언(Autobatterien)이 지정되지 않았습니다.",
  "45003": "오토배테리언(Autobatterien)이 지정되지 않았습니다.",
  "45004": "거래 유형이 지정되지 않았습니다.",
  "45005": "거래 유형이 지정되지 않았습니다.",
  "45006": "최소 금액이 잘못되었습니다.",
  "45007": "최대 금액이 잘못되었습니다.",
  "45008": "최대 교환 금액이 유효하지 않습니다.",
  "45009": "최대 교환 금액이 유효하지 않습니다.",
  "45010": "위치가 지정되지 않았습니다.",
  "45011": "요율이 지정되지 않았습니다.",
  "45012": "요율이 지정되지 않았습니다.",
  "45013": "요율이 지정되지 않았습니다.",
  "45014": "요율이 지정되지 않았습니다.",
  "45015": "플랫폼 요율이 지정되지 않았습니다.",
  "45016": "플랫폼 요율이 지정되지 않았습니다.",
  "45017": "이율 값이 지정되지 않았습니다.",
  "45018": "이율 값이 지정되지 않았습니다.",
  "45019": "요율이 지정되지 않았습니다.",
  "45020": "광고 생성을 위한 금액이 부족합니다.",
  "45021": "광고 생성에 실패했습니다.",
  "45022": "광고를 찾을 수 없습니다.",
  "45023": "거래 상태가 지정되지 않았습니다.",
  "45024": "거래 상태가 지정되지 않았습니다.",
  "45025": "거래 상태 변경에 실패했습니다.",
  "45026": "광고를 찾을 수 없습니다.",
  "45027": "광고 업데이트 오류",
  "46000": "거래를 찾을 수 없습니다.",
  "46001": "거래를 찾을 수 없습니다.",
  "46002": "토큰(Token) 광고가 지정되지 않았습니다.",
  "46003": "토큰(Token) 광고가 지정되지 않았습니다.",
  "46004": "거래 금액(수량)이 지정되지 않았습니다.",
  "46005": "거래 금액(수량)이 지정되지 않았습니다.",
  "46006": "거래 생성에 실패했습니다.",
  "46007": "거래 상태는 변경할 수 없습니다.",
  "46008": "거래가 업데이트되지 않았습니다.",
  "46009": "거래 상태가 지정되지 않았습니다.",
  "46010": "거래 상태가 지정되지 않았습니다.",
  "47000": "메시지 유형을 지정하지 마십시오.",
  "47001": "메시지 유형을 지정하지 마십시오.",
  "47002": "메시지가 비어 있습니다.",
  "47003": "메시지가 비어 있습니다.",
  "47004": "전송에 실패했습니다.",
  "47005": "메시지 ID가 지정되었습니다.",
  "47006": "전송에 실패했습니다.",
  "48000": "위치가 지정되지 않았습니다.",
  "48001": "위치가 지정되지 않았습니다.",
  "49000": "지갑 생성 중 오류",
  "50000": "전송 중 오류",
  "50001": "평가를 지정하십시오.",
  "50002": "평가를 지정하십시오.",
  "50003": "의견은 필수입력입니다.",
  "51000": "사용자를 찾을 수 없습니다.",
  "51001": "이메일이 지정되지 않았습니다.",
  "51002": "유효하지 않은 형식의 이메일",
  "51003": "이미 사용 중인 이메일입니다.",
  "51004": "사용자 이름이 지정되지 않았습니다.",
  "51005": "유효하지 않은 사용자 이름 형식",
  "51006": "사용자 이름이 이미 이용 중입니다.",
  "51007": "비밀번호가 지정되지 않았습니다.",
  "51008": "유효하지 않은 비밀번호",
  "51009": "로그 횟수 초과",
  "51010": "비밀번호 변경에 실패했습니다.",
  "51011": "등록 시 오류",
  "51012": "유효하지 않은 활성화, 코드를 찾을 수 없습니다.",
  "51013": "유효하지 않은 활성화, 코드를 찾을 수 없습니다.",
  "51014": "사용자 활성화에 실패했습니다.",
  "51015": "특정 사용자는 작업을 사용할 수 없습니다.",
  "51016": "TFA 상태를 지정하십시오.",
  "51017": "TFA가 이미 활성화된 상태입니다.",
  "51018": "TFA-유형이 지정되지 않았습니다.",
  "51019": "잘못된 유형의 TFA",
  "52000": "API 이름을 입력하십시오.",
  "52001": "유효하지 않은 이름 형식",
  "52002": "API 생성에 실패했습니다",
  "52003": "API를 찾을 수 없습니다.",
  "52004": "API를 찾을 수 없습니다.",
  "52005": "API 업데이트에 실패했습니다.",
  "52006": "API 키를 찾을 수 없습니다.",
  "52007": "유효하지 않은 API 키",
  "52008": "API 업데이트에 실패했습니다.",
  "52009": "API 업데이트에 실패했습니다.",
  "52010": "API 업데이트에 실패했습니다.",
  "52011": "API 업데이트에 실패했습니다.",
  "53000": "Ip를 찾을 수 없습니다.",
  "53001": "Ip를 찾을 수 없습니다.",
  "53002": "IP 추가에 실패했습니다.",
  "53003": "IP 삭제에 실패했습니다.",
  "53004": "Ip를 찾을 수 없습니다.",
  "54000": "API를 업데이트할 수 없습니다.",
  "54001": "API를 업데이트할 수 없습니다.",
  "54002": "API를 업데이트할 수 없습니다.",
  "51020": "리캡차(Recaptcha) 검증에 실패했습니다.",
  "51021": "리캡차(Recaptcha) 검증에 실패했습니다.",
  "51022": "60초 후에 활성화 이메일 재전송이 가능합니다.",
  "51015_activation_request": "계정이 이미 활성화 상태입니다.. <a href='/user/login'>환영합니다.</a>" ,
  "51000_activation_request": "잘못 입력하셨거나 이메일이 등록되지 않았습니다.",
};
const error = {
    'error': '오류',
    'order-not-found': '해당 상태의 주문이 없습니다.',
    '404': '페이지를 찾을 수 없습니다.',
    ...newError,
    error_send_code: '오류가 발생하여, 코드가 전송되지 않습니다. 다시 시도해주십시오.',
    error_check_data: '입력된 정보를 확인해주십시오.',
    invalid_ip: '유효하지 않은 IP주소 형식입니다.',
    advert_create: {
      '-33001': '유형을 찾을 수 없습니다.',
      '-33002': '유형을 찾을 수 없습니다.',
      '-33003': '통화를 찾을 수 없습니다.',
      '-33004': '통화를 찾을 수 없습니다.',
      '-33005': '최소 거래 한도는 0보다 커야 합니다.',
      '-33006': '금액 한도는 0보다 커야 합니다.',
      '-33007': '최소 거래 한도가 최대 거래 한도보다 클 수는 없습니다.',
      '-33008': '금액 한도를 찾을 수 없습니다.',
      '-33009': '금액 한도가 유효하지 않습니다.',
      '-33010': '금액 한도가 최소 거래 한도보다 작을 수 없습니다.',
      '-33011': '지불 통화를 찾을 수 없습니다.',
      '-33012': '지불 통화가 유효하지 않습니다.',
      '-33013': '입력란 "교환 통화"는 "지불 통화"와 동일합니다.',
      '-33014': '한 통화 유닛의 환율을 찾을 수 없습니다.',
      '-33015': '한 통화 유닛의 환율이 유효하지 않습니다.',
      '-33016': '지불 시스템을 찾을 수 없습니다.',
      '-33017': '지불 시스템이 존재하지 않습니다.',
      '-33018': '국가를 찾을 수 없습니다.',
      '-33019': '국가가 존재하지 않습니다.',
      '-33020': '만료 시간을 찾을 수 없습니다.',
      '-33021': '만료 시간이 유효하지 않습니다.',
      '-33022': '위치가 유효하지 않습니다.',
      '-33023': '지갑이 존재하지 않습니다.',
      '-33024': '잔고를 찾을 수 없습니다.',
      '-33025': '광고 생성 중 오류가 발생했습니다.',
      '-33037': '잔고를 찾을 수 없습니다.',
    },
    advert_info: {
      '-33001': '광고 Uuid를 찾을 수 없습니다.',
      '-33002': '광고가 존재하지 않습니다.',
    },
    advert_set_status: {
      '-33001': '광고 Uuid를 찾을 수 없습니다.',
      '-33002': '광고 상태를 찾을 수 없습니다.',
      '-33003': '광고 상태가 유효하지 않습니다.',
      '-33004': '광고가 존재하지 않습니다.',
      '-33005': '주문 상태 오류',
    },
    event_create: {
      '-33001': '주문 Uuid를 찾을 수 없습니다.',
      '-33002': '주문이 존재하지 않습니다.',
      '-33003': '이 주문에는 액세스 할 수 없습니다.',
      '-33004': '유형을 찾을 수 없습니다.',
      '-33005': '유효하지 않은 유형입니다.',
      '-33006': '밸류값을 찾을 수 없습니다.',
      '-33007': '유효하지 않은 밸류값입니다.',
      '-33008': '이벤트 생성 도중 오류가 발생했습니다.'
    },
    order_create: {
      '-33001': '광고_id를 찾을 수 없습니다.',
      '-33002': '광고가 존재하지 않습니다.',
      '-33003': '금액(수량)을 찾을 수 없습니다.',
      '-33004': '유효하지 않은 금액(수량)입니다.',
      '-33005': '계정이 존재하지 않습니다.',
      '-33006': '잔고를 찾을 수 없습니다.',
      '-33007': '주문 생성 도중 오류가 발생했습니다.',
      '-33008': '주문 상태 오류',
    },
    order_event_list: {
      '-33001': '주문 Uuid를 찾을 수 없습니다.',
      '-33002': '주문이 존재하지 않습니다.',
      '-33003': '이 주문에는 액세스 할 수 없습니다.',
    },
    order_info: {
      '-33001': '주문 Uuid를 찾을 수 없습니다.',
      '-33002': '주문이 존재하지 않습니다.'
    },
    order_info_details: {
      '-33001': '주문 Uuid를 찾을 수 없습니다.',
      '-33002': '주문이 존재하지 않습니다.'
    },
    order_set_status: {
      '-33001': '주문 Uuid를 찾을 수 없습니다.',
      '-33002': '주문이 존재하지 않습니다.',
      '-33003': '주문 상태를 찾을 수 없습니다.',
      '-33004': '주문 상태가 유효하지 않습니다.',
      '-33005': '설정 상태가 허용되지 않습니다.',
    },
    place_search: {
      '-33001': '국가를 찾을 수 없습니다.',
      '-33002': '국가가 존재하지 않습니다.',
      '-33003': '검색 찾을 수 없습니다.',
      '-33004': '알 수 없는 오류',
    },
    user_auth_tfa_enable: {
      '-33001': '사용 설정을 찾을 수 없습니다.'
    },
    user_login: {
      '-33001': '이메일을 찾을 수 없습니다.',
      '-33002': '유효하지 않은 이메일입니다.',
      '-33003': '비밀번호를 찾을 수 없습니다.',
      '-33004': '유효하지 않은 파라미터 비밀번호입니다.',
      '-33005': '잘못된 이메일 또는 비밀번호',
      '-33006': '사용자가 활성화되지 않았습니다.',
      '-33007': '잘못된 이메일 또는 비밀번호',
      '-33008': '잘못된 이메일 또는 비밀번호',
    '-33009': '잘못된 이메일 또는 비밀번호',
    '-33010': '로그인 시도 횟수를 초과했습니다.',
  },
  advert_update: {
    '-33024': '광고 업데이트 오류',
  },
  common_error: {
    '-32000': '서버 에러',
    '-32007': '세션이 유효하지 않습니다.',
    '-32008': '세션이 유효하지 않습니다.',
    '-32009': '유효하지 않은 TFA 코드',
    '-32010': '잘못된 이메일 주소',
  },
  };

const p2p = { ...messages, error };



export default {
  "form": {
    "email": "이메일",
    "password": "비밀번호",
    "confirm_pwd": "비밀번호 확인",
    "auth_code": "인증 코드",
    "your_login": "로그인",
    "login": "로그인",
    "enter_google_2fa_code": "6자리 코드 입력",
    "old_pwd": "이전 비밀번호",
    "new_pwd": "새 비밀번호",
    "title": "타이틀",
    "expired_time": "시간 만료",
    "currency": "통화",
    "amount": "금액",
    "select_currency": "통화 선택",
    "send_to": "수신자",
    ...p2p.form,
  },
  "action": {
    "login": "로그인",
    "create_acc": "계정 만들기",
    "authenticate": "인증",
    "cancel": "취소",
    "restore": "복원",
    "change": "변경",
    "show_qr": "QR 코드 표시",
    "enable": "활성화",
    "save_qr": "QR 코드 저장",
    "disable": "비활성화",
    "create": "만들기",
    "add": "추가",
    "save": "저장",
    "copy": "복사",
    "send": "보내기",
    "exchange": "거래소",
    ...p2p.action,
  },
  "page": {
    "activation_acc": "계정 활성화",
    "sign_in": "로그인",
    "sign_up": "회원가입",
    "sign_out": "로그아웃",
    "create_your_acc": "계정 만들기",
    "forgot_pwd": "비밀번호 찾기",
    "not_registered": "계정이 없으신가요? 지금 만드십시오.",
    "already_registered": "이미 계정이 있으신가요? 로그인",
    "success_registered": "등록해주셔서 감사합니다! 계정 활성화를 위한 인증 이메일이 전송되었습니다.",
    "success_activated_acc": "귀하의 계정이 성공적으로 활성화되었습니다.",
    "error_activated_acc": "오류 귀하의 계정은 활성화되지 않았습니다.",
    "request_new_pwd": "새 암호를 요청합니다.",
    "success_recovery_mail_pwd": "성공! 암호 복구 지침을 포함한 이메일이 전송되었습니다.",
    "enable_2fa": "이중 인증 사용",
    "disable_2fa": "이중 인증 사용 중지",
    "text_google_2fa": "계정 안전을 위해 이중 인증(2FA)을 활성화하십시오. 이를 위해서는 6자리 코드가 필요합니다. 이 코드를 얻으려면, 구글 인증앱(Google Authenticator)을 다운로드하시고 QR 코드를 스캔하십시오.",
    "text_google_2fa_disable": "이중 인증(2FA) 사용을 중지하려면, 구글 인증앱에서 제공하는 6 자리 코드 입력 후 \"사용 중지\"를 클릭하십시오.",
    "qr_code": "QR 코드",
    "your_secret_key": "귀하의 비밀밀 키",
    "change_password": "비밀번호 변경",
    "create_user_api": "사용자 API 생성",
    "title": "타이틀",
    "date": "날짜",
    "status": "상태",
    "active": "활성화",
    "deactive": "비활성화",
    "have_not_api_key": "귀하에게는 이 키가 없습니다.",
    "your_api_keys": "귀하의 API 키",
    "api_methods_acc": "메서드 계정",
    "api_convert_currency": "메서드 비밀 통화",
    "api_withdraw": "메서드 출금",
    "actions": "조치",
    "ip_address": "IP 주소",
    "settings": "설정",
    "make_deposit": "입금하기",
    "autoconvert_into_cnx": "CNX로 자동 변환",
    "deposit_qr": "아래에서 스캔하여 입금",
    "deposit_copy": "또는 직접 입금",
    "choose_withdraw_type": "인출 유형 선택",
    "you_give": "제공하시는 금액",
    "you_receive": "받으실 금액",
    "exchange_rate": "환율",
    "fee": "수수료",
    "pair": "페어",
    "price": "가격",
    "volume": "볼륨",
    "charts": "차트",
    "today": "오늘",
    "this_week": "이번주",
    "all": "전체",
    "this_month": "이번달",
    "last_month": "지난달",
    "this_year": "올해",
    "previous": "이전",
    "next": "다음",
    "deposit": "예금",
    "transactions": "트랜잭션",
    "withdraw": "출금",
    "exchange": "거래소",
    "restore": "복원",
    "balances": "잔고",
    "fiat": "법정화폐(fiat)"
  },
  "message": {
    "success": "성공",
    "status_change_autoconvert_into_cnx": "상태가 성공적으로 변경되었습니다.",
    ...p2p.message,
  },
  "error": {
    "fill_all_field": "모든 필드를 채우십시오!",
    "wrong_user": "액세스가 거부되었습니다: 잘못된 아이디 또는 암호입니다.",
    "not_activated_acc": "링크가 포함된 메시지가 이메일로 전송되었습니다. 메시지의 링크를 따라 계정을 활성화하십시오.",
    "invalid_auth_key": " 유효하지 않은 인증 코드!",
    "invalid_format": "유효하지 않은 형식, % {field}!",
    "unknown_error": "알 수 없는 오류!",
    "enter_6_dig": "6자리 코드 입력",
    "register_error": "등록 중 오류가 발생했습니다!",
    "different_pwd": "암호가 다릅니다!",
    "fail_change_pwd": "비밀번호를 변경하지 못했습니다!",
    "wrong_user_restore_pwd": "잘못된 사용자 아이디!",
    "fail_activated_2fa": "이중 인증(2FA) 활성화에 실패했습니다!",
    "is_empty": "%{field}는 비어 있습니다!",
    "should_num": "%{field}는 숫자여야 합니다!",
    "error_send": "오류 보내기",
    "error": "오류",
    "exchange_not_balance": "거래를 위한 계정 잔고가 충분하지 않을 수 있습니다.",
    ...p2p.error,
  },
  "fee": {
    "cnx": "최소 금액 = 0.001 CNX | 수수료 무료",
    "btc": "최소 금액 = 0.002 BTC | 수수료 = 0.001 BTC",
    "eth": "최소 금액 = 0.002 ETH | 수수료 = 0.001 ETH"
  },
  "statusTransaction": {
    "created": "생성",
    "moderated": "조정됨",
    "unconfirmed": "컨펌 미승인",
    "confirmed": "컴펌 승인",
    "admin_moderate_success": "관리자 승인",
    "admin_moderate_cancel": "관리자에 의한 취소",
    "admin_moderate_wait": "관리자에 의한 조정",
    "moderate": "조정"
  },
  validate: {
    'empty_field': '입력란은 비워 둘 수 없습니다.',
    'empty_fields': '모든 입력란을 비워 둘 수 없습니다.',
    'invalid_email': '이메일은 반드시 유효해야 합니다.',
    'invalid_username': '유효하지 않은 사용자 이름',
    'invalid_repassword': '비밀번호가 일치하지 않습니다.',
    'invalid_select_currency': '통화를 선택해야 합니다.',
    'invalid_password_short': '비밀번호는 8자리 이상이어야 합니다.'
  },
  order_status: {
    created_buyer: '공급업체 승인 대기 중',
    accepted_buyer: '매입자 대금 이체 대기 중',
    paid_buyer: '지불 완료',
    moderated_buyer: '중재 중(On moderation)',
    confirmed_buyer: '확정',
    completed_buyer: '거래가 성공했습니다.',
    timeout_confirmed_buyer: '거래 시간이 만료되었습니다. 이체되었습니다.',
    canceled_buyer: '매도자가 거래를 취소하였습니다.',
    timeout_canceled_buyer: '거래 시간이 만료되었습니다.',
    created_seller: '매입자 확정 대기 중',
    accepted_seller: '매입자 자금 이체 대기 중',
    paid_seller: '지불 완료',
    moderated_seller: '중재 중(On moderation)',
    confirmed_seller: '확정',
    completed_seller: '거래가 성공했습니다.',
    timeout_complete_seller: '거래 시간이 만료되었습니다. 이체되었습니다.',
    canceled_seller: '매입자가 거래를 취소하였습니다.',
    timeout_canceled_seller: '거래 시간이 만료되었습니다.'
  },
  status_adverts: {
    actived: '활성화',
    removed: '삭제 완료',
    canceled: '비활성',
  },
  status_orders: {
    created: '승인 대기 중',
    accepted: '이체 대기 중',
    paid: '지급 완료',
    moderated: '중재 중(Moderation)',
    confirmed: '확정',
    completed:'거래가 성공적으로 성사되었습니다.',
    timeout_confirmed: '거래 시간이 만료되었습니다.',
    timeout_canceled: '거래 시간이 만료되었습니다.',
    canceled: '거래가 취소되었습니다.'
  },
  user_status: {
    activated: '사용자가 활성화되었습니다.',
    blocked: '사용자가 차단되었습니다.'
  },
  menu: {
    'buy': '매입',
    'sell': '매도',
    'guide': '가이드',
    'support': '지원',
    'terms-of-service': '서비스 약관',
    'orders': '주문',
    'rates': '요율'
  },
  user: {
    'user': '사용자',
    'registration': '등록',
    'login': '로그인',
    'logout': '로그아웃',
    'account': '계정',
    'profile': '프로필',
    'username': '사용자 이름',
    'password': '비밀번호',
    'name': '이름',
    'phone': '전화',
    'adverts': '광고',
    'wallet': '지갑'
  },
  "coupon": {
    "checking_coupon": "카드 검사 중",
    "scanning_coupon": "카드 스캔",
    "begin_scanning_coupon": "카드 스캔",
    "not_access_camera": "카메라에 액세스 권한을 부여하고 페이지를 새로 고침해야 합니다",
    "coupon": "카드",
    "check": "검사",
    "create_coupon": "코드 생성",
    "time_of_action": "동작 시간",
    "receiver": "받는 사람",
    "select_currency": "통화 선택",
    "activate_coupon": "카드 활성화",
    "apply_coupon": "카드 보충",
    "apply": "입금하기",
    "deactivate_coupon": "카드 비활성화",
    "deactivate": "비활성화",
    "information": "카드 정보",
    "creator": "소유자",
    "given": "비밀번호로 보호됨",
    "not_given": "비밀번호로 보호되지 않음",
    "time_of_redeem": "활성화 시간",
    "invalid_qrcode": "잘못된 QR 코드",
    "check_coupon_fail": "카드 데이터를 찾을 수 없음",
    "field_empty": "Field \"%{field}\" 기입해야 합니다",
    "take_currency": "통화를 지정해야 합니다",
    "success_create_coupon": "카드가 성공적으로 생성되었습니다",
    "error_length_comment": "댓글이 허용된 문자 수(255)를 초과합니다",
    "error_create_coupon": "카드를 생성하는 동안 오류가 발생했습니다",
    "need_password": "암호를 지정해야 합니다",
    "activate_coupon_success": "카드가 활성화되었습니다",
    "activate_coupon_error": "카드를 활성화하는 동안 오류가 발생했습니다",
    "not_found_coupon": "카드를 찾을 수 없음",
    "coupon_was_used": "카드가 이미 사용되었습니다",
    "fail_apply_coupon": "카드를 보충하지 못했습니다",
    "coupon_refilled": "카드가 보충되었습니다",
    "your_coupon": "고객님의 카드",
    "optional_field": "필요 없음",
    "types": {
      "debit": "카드",
      "empty": "일회용 카드",
      "joker": "조커"
    },
    "status": {
      "actived": "활성화되지 않음",
      "redeemed": "지출",
      "created": "보충을 기다리는 중"
    }
  }
}
