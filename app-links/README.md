# App Links 배포 가이드

## 개요
이 폴더의 파일들을 `lunajob.app` 도메인에 배포하면 유니버셜 링크(iOS) / 앱 링크(Android)가 활성화됩니다.

## 파일 구조
```
.well-known/
├── apple-app-site-association  (iOS 유니버셜 링크)
└── assetlinks.json             (Android 앱 링크)
```

## 배포 URL
배포 후 아래 URL에서 접근 가능해야 합니다:
- `https://lunajob.app/.well-known/apple-app-site-association`
- `https://lunajob.app/.well-known/assetlinks.json`

## Vercel 배포 방법

1. Vercel CLI 설치
```bash
npm i -g vercel
```

2. 배포
```bash
cd app-links
vercel --prod
```

3. 도메인 연결
   - Vercel Dashboard → Settings → Domains
   - `lunajob.app` 추가
   - DNS 설정 (A 레코드 또는 CNAME)

## 중요 사항

### Content-Type
- `apple-app-site-association`: `application/json` (확장자 없음 주의)
- `assetlinks.json`: `application/json`

### HTTPS 필수
반드시 HTTPS로 서빙되어야 합니다.

### 검증 도구
- iOS: https://search.developer.apple.com/appsearch-validation-tool/
- Android: https://developers.google.com/digital-asset-links/tools/generator

## 앱 설정 (추가 필요)

### iOS - Runner.entitlements
```xml
<key>com.apple.developer.associated-domains</key>
<array>
    <string>applinks:lunajob.app</string>
</array>
```

### Android - AndroidManifest.xml
```xml
<intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW"/>
    <category android:name="android.intent.category.DEFAULT"/>
    <category android:name="android.intent.category.BROWSABLE"/>
    <data android:scheme="https" android:host="lunajob.app"/>
</intent-filter>
```

## SHA-256 Fingerprint
- Release: `12:AB:73:54:B1:7F:8C:DD:A4:32:E1:55:03:98:D9:EF:B9:4D:23:0B:77:D9:A3:E1:34:51:DA:77:8D:08:91:55`

Google Play 앱 서명 사용 시 Play Console에서 제공하는 SHA-256도 추가해야 합니다.
