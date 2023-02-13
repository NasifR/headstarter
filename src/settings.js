import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react"

const appId = "d199b8cb6bee43f196c135f5d1ee490a"
const token = "007eJxTYPi52kcsfJv+tTpj5/wPAesrlCzOFBgcdlxziK3g66Fj+jcVGFIMLS2TLJKTzJJSU02M0wwtzZINjU3TTFMMgXxLg8TtS14lNwQyMhw3E2RlZIBAEJ+FITcxM4+BAQCLYiCL"

export const config = {mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";