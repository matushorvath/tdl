// AUTOGENERATED, edit index.js.flow instead

import {
  Update as Td$Update,
  error as Td$error,
  Invoke,
  Execute,
  setTdlibParameters as Td$setTdlibParameters
} from 'tdlib-types'

import { TDLibClient, ITDLibJSON } from 'tdl-shared'

export { TDLibClient, ITDLibJSON }

export type TDLibParameters = Omit<Td$setTdlibParameters, '_'>

/**
 * Note: the public methods in this class are defined as properties, so
 * `.bind` is not needed. This class is generally not meant to be extended.
 */
export class Client {
  constructor(tdlibInstance: ITDLibJSON, options: ClientOptions);
  static create(tdlibInstance: ITDLibJSON, options: ClientOptions): Client;
  /**
   * Log in to your Telegram account. The getter function will not be called if
   * the client is already logged in.
   */
  login: (getLoginDetails?: () => LoginDetails) => Promise<void>;
  /**
   * Log in as a bot. You can get the token from `@BotFather`.
   * If the client is already logged in as a user, it will not be relogged
   * as a bot. In case a function is passed instead of string, it will not be
   * called if you are already logged in.
   * This function is short for
   * ```
   * client.login(() => ({
   *   type: 'bot',
   *   getToken: retry => retry
   *     ? Promise.reject('Invalid bot token')
   *     : Promise.resolve(token)
   * }))
   * ```
   */
  loginAsBot: (token: string | (() => string | Promise<string>)) => Promise<void>;
  /** Attach an event listener. Use this function to iterate through updates. */
  on: On;
  /** Attach a one-time event listener. */
  once: On;
  /** Remove an event listener. */
  off: Off;
  /** Alias for `client.on`. */
  addListener: On;
  /** Alias for `client.off`. */
  removeListener: Off;
  /** Call a TDLib method asynchronously. */
  invoke: Invoke;
  /**
   * Call a TDLib method synchronously. Can be used only with the methods
   * marked as "can be called synchronously" in the TDLib documentation.
   */
  execute: Execute;
  /**
   * Close the client. This sends `{ _: 'close' }` and waits for
   * `authorizationStateClosed`.
   */
  close: () => Promise<void>;
  /**
   * Get the TDLib version in the `major.minor.patch` format. `getVersion` can
   * throw an exception if the version is not (yet) received.
   */
  getVersion: () => string;
  getBackendName: () => string;
  /** For advanced use only. */
  emit: Emit;

  /**
   * @deprecated Use `client.close` instead. The client will be automatically
   * destroyed on `authorizationStateClosed`.
   */
  destroy: () => void;
  /** @deprecated This is deprecated in TDLib since v1.8.0 */
  setLogFatalErrorCallback: (fn: null | ((errorMessage: string) => void)) => void;
  /** @deprecated Unstable */
  pause: () => void;
  /** @deprecated Unstable */
  resume: () => void;
  /** @deprecated Present for backward compatibility only, does nothing. */
  connect: () => Promise<void>;
  /** @deprecated Use `client.login` instead. */
  connectAndLogin: (getLoginDetails?: () => LoginDetails) => Promise<void>;
}

export type ClientOptions = {
  /** Required. Can be obtained at https://my.telegram.org/ */
  apiId?: number,
  /** Required. Can be obtained at https://my.telegram.org/ */
  apiHash?: string,
  /** A relative path to the database directory. Defaults to `'_td_database'`. */
  databaseDirectory?: string,
  /** A relative path to the files directory. Defaults to `'_td_files'`. */
  filesDirectory?: string,
  /** An optional key for database encryption. */
  databaseEncryptionKey?: string,
  /**
   * Set TDLib verbosity level. From the TDLib documentation: "value 0
   * corresponds to fatal errors, value 1 corresponds to errors, value 2
   * corresponds to warnings and debug warnings, value 3 corresponds to
   * informational, value 4 corresponds to debug, value 5 corresponds to verbose
   * debug, value greater than 5 and up to 1024 can be used to enable even more
   * logging". Another possible option is `'default'`, `tdl` will then not send
   * any verbosity to TDLib. Defaults to 2.
   */
  verbosityLevel?: number | 'default',
  /** Use test telegram server. */
  useTestDc?: boolean,
  /**
   * Raw TDLib parameters. These contain fields like application_version,
   * device_model, etc. Defaults to:
   * ```
   * { use_message_database: true
   * , use_secret_chats: false
   * , system_language_code: 'en'
   * , application_version: '1.0'
   * , device_model: 'Unknown device'
   * , system_version: 'Unknown'
   * , enable_storage_optimizer: true }
   * ```
   */
  tdlibParameters?: TDLibParameters,

  /**
   * Advanced option. When set to true, the client does not emit updates if
   * `connectionState` equals to `connectionStateUpdating`.
   */
  skipOldUpdates?: boolean,
  /**
   * Advanced option. This disables handling of auth* updates, making `tdl` a
   * relatively tiny wrapper. When set to true, you need to handle the
   * `authorizationStateWaitTdlibParameters` update manually (and
   * `authorizationStateWaitEncryptionKey` in TDLib < v1.8.6). The parameters
   * should be passed to TDLib manually by calling `setTdlibParameters`. The
   * `client.login` function will not work and should not be called. The options
   * `tdlibParameters`, `apiId`, `apiHash`, `useTestDc`, `databaseDirectory`,
   * `filesDirectory` will do nothing.
   */
  bare?: boolean,
  /**
   * Advanced option. Configures the delay for the `receive` tdjson function.
   * Defaults to `10.0` seconds.
   */
  receiveTimeout?: number,
  /**
   * Advanced option. This will result in slightly worse logs with the `_` field
   * at the end of the object.
   */
  useMutableRename?: boolean,
  /** @deprecated Use `verbosityLevel: 'default'` instead. */
  useDefaultVerbosityLevel?: boolean,
  /** @deprecated Use the `bare` option instead. */
  disableAuth?: boolean
}

export type LoginUser = {
  type: 'user',
  /** Handler for `authorizationStateWaitPhoneNumber`, will be recalled on error. */
  getPhoneNumber: (retry?: boolean) => Promise<string>,
  /** Handler for `authorizationStateWaitEmailAddress`, TDLib v1.8.6+ only. */
  getEmailAddress: () => Promise<string>,
  /** Handler for `authorizationStateWaitEmailCode`, TDLib v1.8.6+ only. */
  getEmailCode: () => Promise<string>,
  /** Handler for `authorizationStateWaitOtherDeviceConfirmation`, sends nothing. */
  confirmOnAnotherDevice: (link: string) => void,
  /** Handler for `authorizationStateWaitCode`, will be recalled on error. */
  getAuthCode: (retry?: boolean) => Promise<string>,
  /** Handler for `authorizationStateWaitPassword`, will be recalled on error. */
  getPassword: (passwordHint: string, retry?: boolean) => Promise<string>,
  /** Handler for `authorizationStateWaitRegistration`. */
  getName: () => Promise<{ firstName: string, lastName?: string }>
}

export type LoginBot = {
  /** You will be logged in as a bot. */
  type: 'bot',
  /**
   * Handler for `authorizationStateWaitPhoneNumber`,
   * sends `checkAuthenticationBotToken`, will be recalled on error.
   */
  getToken: (retry?: boolean) => Promise<string>
}

export type LoginDetails = Partial<LoginUser> | LoginBot

export type StrictLoginDetails = LoginUser | LoginBot

/**
 * This wraps any errors that are thrown in:
 * - `client.on` handlers,
 * - `client.login` handlers,
 * - errors during calls to TDLib,
 * - other internal tdl errors.
 */
export class TdlError extends Error {
  readonly err: any
}

export type On =
  & ((event: 'update', listener: (update: Td$Update) => void) => Client)
  & ((event: 'error', listener: (err: Td$error | TdlError) => void) => Client)
  & ((event: 'destroy', listener: () => void) => Client)
  & ((event: 'auth-needed', listener: () => void) => Client)
  & ((event: 'auth-not-needed', listener: () => void) => Client)
  & ((event: 'response', listener: (res: any) => void) => Client)

export type Emit =
  & ((event: 'update', update: Td$Update) => void)
  & ((event: 'error', err: Td$error | TdlError) => void)
  & ((event: 'destroy') => void)
  & ((event: 'auth-needed') => void)
  & ((event: 'auth-not-needed') => void)
  & ((event: 'response', res: any) => void)

export type Off =
  & ((event: 'update', listener: (...args: any[]) => any, once?: boolean) => void)
  & ((event: 'error', listener: (...args: any[]) => any, once?: boolean) => void)
  & ((event: 'destroy', listener: (...args: any[]) => any, once?: boolean) => void)
  & ((event: 'auth-needed', listener: (...args: any[]) => any, once?: boolean) => void)
  & ((event: 'auth-not-needed', listener: (...args: any[]) => any, once?: boolean) => void)
  & ((event: 'response', listener: (...args: any[]) => any, once?: boolean) => void)

// The destroy and response events are deprecated.

/** @deprecated Use ClientOptions */
export type StrictClientOptions = {
  apiId?: number,
  apiHash?: string,
  databaseDirectory: string,
  filesDirectory: string,
  databaseEncryptionKey: string,
  verbosityLevel: number | 'default',
  useTestDc: boolean,
  tdlibParameters: TDLibParameters,
  skipOldUpdates: boolean,
  bare: boolean,
  receiveTimeout: number,
  useMutableRename: boolean,
  useDefaultVerbosityLevel: boolean,
  disableAuth: boolean
}
/** @deprecated Use ClientOptions */
export type ConfigType = ClientOptions

// TDL, TDl, default exist for backward compatibility only. Use Client instead.
export { Client as TDL, Client as Tdl }
export default Client
