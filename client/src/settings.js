const API_BASE_URL = "http://comemoscomopensamos.local/";

const LOGIN_URL = API_BASE_URL + 'api/login_check';

const REGISTER_URL = API_BASE_URL + 'api/register'

const CHECK_TOKEN_URL = API_BASE_URL + '/token_check'

const VALIDATE_SESSION = API_BASE_URL + 'api/session';

// const TOKEN_CHECK = API_BASE_URL + '/api/token_check';

const INDEX_PRODUCT_PUBLIC = API_BASE_URL + 'api/product';

const API_PRODUCT_ADMIN = API_BASE_URL + 'api/admin/product';

const API_CATEGORY = API_BASE_URL + 'api/category';

const API_NEWS_SUPER_ADMIN = API_BASE_URL + 'api/super_admin/news';

const INDEX_NEWS_PUBLIC = API_BASE_URL + 'api/news/';
// const DETALLE_DE_NOTICIA = INDEX_NEWS_PUBLIC + 'detail/';

export {
    API_BASE_URL,
    LOGIN_URL,
    INDEX_PRODUCT_PUBLIC,
    VALIDATE_SESSION,
    API_PRODUCT_ADMIN,
    API_NEWS_SUPER_ADMIN,
    API_CATEGORY,
    INDEX_NEWS_PUBLIC,
    REGISTER_URL,
    CHECK_TOKEN_URL
    // DETALLE_DE_NOTICIA 
};
