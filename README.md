# capacitor-qualtrics-android

Integration between ionic and qualtrics through android capacitor

## Install

```bash
npm install capacitor-qualtrics-android
npx cap sync
```

## API

<docgen-index>

* [`initializeQualtricsWithParams(...)`](#initializequaltricswithparams)
* [`openSurvey(...)`](#opensurvey)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initializeQualtricsWithParams(...)

```typescript
initializeQualtricsWithParams(data: { brandId: string; projectId: string; extraRefId: string; }) => void
```

initializeQualtricsWithParams
Must be called when starting the ionic application without forgetting the qualtrics parameters

| Param      | Type                                                                     | Description                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`data`** | <code>{ brandId: string; projectId: string; extraRefId: string; }</code> | brandId - from de qualtrics platform (XM), projectId - from de qualtrics platform (XM), extraRefId - it is the user's ban extracted from Mi Claro App } |

--------------------


### openSurvey(...)

```typescript
openSurvey(data: { interceptId: string; flag: string; callbackParamsQualtrics: string; }) => Promise<QualtricsSurveyResponse>
```

openSurvey
Send the idIntercept of the survey that should be opened

| Param      | Type                                                                                 | Description                                                                                           |
| ---------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| **`data`** | <code>{ interceptId: string; flag: string; callbackParamsQualtrics: string; }</code> | interceptId - to open, flag - by platform callbackParamsQualtrics - Claro user parameters in base64 } |

**Returns:** <code>Promise&lt;<a href="#qualtricssurveyresponse">QualtricsSurveyResponse</a>&gt;</code>

--------------------


### Interfaces


#### QualtricsSurveyResponse

| Prop          | Type                 |
| ------------- | -------------------- |
| **`success`** | <code>boolean</code> |
| **`message`** | <code>string</code>  |

</docgen-api>
