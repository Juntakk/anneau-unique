
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Weapon
 * 
 */
export type Weapon = $Result.DefaultSelection<Prisma.$WeaponPayload>
/**
 * Model Equipment
 * 
 */
export type Equipment = $Result.DefaultSelection<Prisma.$EquipmentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weapon`: Exposes CRUD operations for the **Weapon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weapons
    * const weapons = await prisma.weapon.findMany()
    * ```
    */
  get weapon(): Prisma.WeaponDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipment`: Exposes CRUD operations for the **Equipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipment
    * const equipment = await prisma.equipment.findMany()
    * ```
    */
  get equipment(): Prisma.EquipmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Weapon: 'Weapon',
    Equipment: 'Equipment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "weapon" | "equipment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Weapon: {
        payload: Prisma.$WeaponPayload<ExtArgs>
        fields: Prisma.WeaponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeaponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeaponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          findFirst: {
            args: Prisma.WeaponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeaponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          findMany: {
            args: Prisma.WeaponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>[]
          }
          create: {
            args: Prisma.WeaponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          createMany: {
            args: Prisma.WeaponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeaponCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>[]
          }
          delete: {
            args: Prisma.WeaponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          update: {
            args: Prisma.WeaponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          deleteMany: {
            args: Prisma.WeaponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeaponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeaponUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>[]
          }
          upsert: {
            args: Prisma.WeaponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          aggregate: {
            args: Prisma.WeaponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeapon>
          }
          groupBy: {
            args: Prisma.WeaponGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeaponGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeaponCountArgs<ExtArgs>
            result: $Utils.Optional<WeaponCountAggregateOutputType> | number
          }
        }
      }
      Equipment: {
        payload: Prisma.$EquipmentPayload<ExtArgs>
        fields: Prisma.EquipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findFirst: {
            args: Prisma.EquipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findMany: {
            args: Prisma.EquipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          create: {
            args: Prisma.EquipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          createMany: {
            args: Prisma.EquipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          delete: {
            args: Prisma.EquipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          update: {
            args: Prisma.EquipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          aggregate: {
            args: Prisma.EquipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipment>
          }
          groupBy: {
            args: Prisma.EquipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    weapon?: WeaponOmit
    equipment?: EquipmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    equipements: number
    armes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipements?: boolean | UserCountOutputTypeCountEquipementsArgs
    armes?: boolean | UserCountOutputTypeCountArmesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEquipementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArmesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeaponWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    experience: number | null
    experience_totale: number | null
    vaillance: number | null
    sagesse: number | null
    corps: number | null
    corps_ameliore: number | null
    coeur: number | null
    coeur_ameliore: number | null
    esprit: number | null
    esprit_ameliore: number | null
    presence: number | null
    athletisme: number | null
    vigilance: number | null
    exploration: number | null
    chant: number | null
    artisanat: number | null
    inspiration: number | null
    voyage: number | null
    intuition: number | null
    guerison: number | null
    courtoisie: number | null
    art_de_la_guerre: number | null
    persuasion: number | null
    discretion: number | null
    fouille: number | null
    chasse: number | null
    enigmes: number | null
    connaissances: number | null
    personnalite: number | null
    deplacement: number | null
    perception: number | null
    survie: number | null
    coutume: number | null
    metier: number | null
  }

  export type UserSumAggregateOutputType = {
    experience: number | null
    experience_totale: number | null
    vaillance: number | null
    sagesse: number | null
    corps: number | null
    corps_ameliore: number | null
    coeur: number | null
    coeur_ameliore: number | null
    esprit: number | null
    esprit_ameliore: number | null
    presence: number | null
    athletisme: number | null
    vigilance: number | null
    exploration: number | null
    chant: number | null
    artisanat: number | null
    inspiration: number | null
    voyage: number | null
    intuition: number | null
    guerison: number | null
    courtoisie: number | null
    art_de_la_guerre: number | null
    persuasion: number | null
    discretion: number | null
    fouille: number | null
    chasse: number | null
    enigmes: number | null
    connaissances: number | null
    personnalite: number | null
    deplacement: number | null
    perception: number | null
    survie: number | null
    coutume: number | null
    metier: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nom: string | null
    culture: string | null
    niveau_de_vie: string | null
    avantage_culturel: string | null
    vocation: string | null
    part_ombre: string | null
    specialites: string | null
    particularite: string | null
    experience: number | null
    experience_totale: number | null
    vaillance: number | null
    sagesse: number | null
    corps: number | null
    corps_ameliore: number | null
    coeur: number | null
    coeur_ameliore: number | null
    esprit: number | null
    esprit_ameliore: number | null
    presence: number | null
    athletisme: number | null
    vigilance: number | null
    exploration: number | null
    chant: number | null
    artisanat: number | null
    inspiration: number | null
    voyage: number | null
    intuition: number | null
    guerison: number | null
    courtoisie: number | null
    art_de_la_guerre: number | null
    persuasion: number | null
    discretion: number | null
    fouille: number | null
    chasse: number | null
    enigmes: number | null
    connaissances: number | null
    personnalite: number | null
    deplacement: number | null
    perception: number | null
    survie: number | null
    coutume: number | null
    metier: number | null
    bonus_degats: string | null
    bonus_degats_distance: string | null
    parade: string | null
    bouclier: string | null
    armure: string | null
    casque: string | null
    recompenses: string | null
    vertus: string | null
    endurance: string | null
    endurance_depart: string | null
    fatigue: string | null
    espoir: string | null
    espoir_depart: string | null
    ombre: string | null
    epuisement: boolean | null
    melancolie: boolean | null
    blesse: boolean | null
    communaute: string | null
    points_progression: string | null
    tresors: string | null
    prestige: string | null
    origine: string | null
    guide: string | null
    eclaireur: string | null
    chasseur: string | null
    guetteur: string | null
    lien_communaute: string | null
    sanctuaires: string | null
    garant: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    culture: string | null
    niveau_de_vie: string | null
    avantage_culturel: string | null
    vocation: string | null
    part_ombre: string | null
    specialites: string | null
    particularite: string | null
    experience: number | null
    experience_totale: number | null
    vaillance: number | null
    sagesse: number | null
    corps: number | null
    corps_ameliore: number | null
    coeur: number | null
    coeur_ameliore: number | null
    esprit: number | null
    esprit_ameliore: number | null
    presence: number | null
    athletisme: number | null
    vigilance: number | null
    exploration: number | null
    chant: number | null
    artisanat: number | null
    inspiration: number | null
    voyage: number | null
    intuition: number | null
    guerison: number | null
    courtoisie: number | null
    art_de_la_guerre: number | null
    persuasion: number | null
    discretion: number | null
    fouille: number | null
    chasse: number | null
    enigmes: number | null
    connaissances: number | null
    personnalite: number | null
    deplacement: number | null
    perception: number | null
    survie: number | null
    coutume: number | null
    metier: number | null
    bonus_degats: string | null
    bonus_degats_distance: string | null
    parade: string | null
    bouclier: string | null
    armure: string | null
    casque: string | null
    recompenses: string | null
    vertus: string | null
    endurance: string | null
    endurance_depart: string | null
    fatigue: string | null
    espoir: string | null
    espoir_depart: string | null
    ombre: string | null
    epuisement: boolean | null
    melancolie: boolean | null
    blesse: boolean | null
    communaute: string | null
    points_progression: string | null
    tresors: string | null
    prestige: string | null
    origine: string | null
    guide: string | null
    eclaireur: string | null
    chasseur: string | null
    guetteur: string | null
    lien_communaute: string | null
    sanctuaires: string | null
    garant: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nom: number
    culture: number
    niveau_de_vie: number
    avantage_culturel: number
    vocation: number
    part_ombre: number
    specialites: number
    particularite: number
    experience: number
    experience_totale: number
    vaillance: number
    sagesse: number
    corps: number
    corps_ameliore: number
    coeur: number
    coeur_ameliore: number
    esprit: number
    esprit_ameliore: number
    presence: number
    athletisme: number
    vigilance: number
    exploration: number
    chant: number
    artisanat: number
    inspiration: number
    voyage: number
    intuition: number
    guerison: number
    courtoisie: number
    art_de_la_guerre: number
    persuasion: number
    discretion: number
    fouille: number
    chasse: number
    enigmes: number
    connaissances: number
    personnalite: number
    deplacement: number
    perception: number
    survie: number
    coutume: number
    metier: number
    bonus_degats: number
    bonus_degats_distance: number
    parade: number
    bouclier: number
    armure: number
    casque: number
    recompenses: number
    vertus: number
    endurance: number
    endurance_depart: number
    fatigue: number
    espoir: number
    espoir_depart: number
    ombre: number
    epuisement: number
    melancolie: number
    blesse: number
    communaute: number
    points_progression: number
    tresors: number
    prestige: number
    origine: number
    guide: number
    eclaireur: number
    chasseur: number
    guetteur: number
    lien_communaute: number
    sanctuaires: number
    garant: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    experience?: true
    experience_totale?: true
    vaillance?: true
    sagesse?: true
    corps?: true
    corps_ameliore?: true
    coeur?: true
    coeur_ameliore?: true
    esprit?: true
    esprit_ameliore?: true
    presence?: true
    athletisme?: true
    vigilance?: true
    exploration?: true
    chant?: true
    artisanat?: true
    inspiration?: true
    voyage?: true
    intuition?: true
    guerison?: true
    courtoisie?: true
    art_de_la_guerre?: true
    persuasion?: true
    discretion?: true
    fouille?: true
    chasse?: true
    enigmes?: true
    connaissances?: true
    personnalite?: true
    deplacement?: true
    perception?: true
    survie?: true
    coutume?: true
    metier?: true
  }

  export type UserSumAggregateInputType = {
    experience?: true
    experience_totale?: true
    vaillance?: true
    sagesse?: true
    corps?: true
    corps_ameliore?: true
    coeur?: true
    coeur_ameliore?: true
    esprit?: true
    esprit_ameliore?: true
    presence?: true
    athletisme?: true
    vigilance?: true
    exploration?: true
    chant?: true
    artisanat?: true
    inspiration?: true
    voyage?: true
    intuition?: true
    guerison?: true
    courtoisie?: true
    art_de_la_guerre?: true
    persuasion?: true
    discretion?: true
    fouille?: true
    chasse?: true
    enigmes?: true
    connaissances?: true
    personnalite?: true
    deplacement?: true
    perception?: true
    survie?: true
    coutume?: true
    metier?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nom?: true
    culture?: true
    niveau_de_vie?: true
    avantage_culturel?: true
    vocation?: true
    part_ombre?: true
    specialites?: true
    particularite?: true
    experience?: true
    experience_totale?: true
    vaillance?: true
    sagesse?: true
    corps?: true
    corps_ameliore?: true
    coeur?: true
    coeur_ameliore?: true
    esprit?: true
    esprit_ameliore?: true
    presence?: true
    athletisme?: true
    vigilance?: true
    exploration?: true
    chant?: true
    artisanat?: true
    inspiration?: true
    voyage?: true
    intuition?: true
    guerison?: true
    courtoisie?: true
    art_de_la_guerre?: true
    persuasion?: true
    discretion?: true
    fouille?: true
    chasse?: true
    enigmes?: true
    connaissances?: true
    personnalite?: true
    deplacement?: true
    perception?: true
    survie?: true
    coutume?: true
    metier?: true
    bonus_degats?: true
    bonus_degats_distance?: true
    parade?: true
    bouclier?: true
    armure?: true
    casque?: true
    recompenses?: true
    vertus?: true
    endurance?: true
    endurance_depart?: true
    fatigue?: true
    espoir?: true
    espoir_depart?: true
    ombre?: true
    epuisement?: true
    melancolie?: true
    blesse?: true
    communaute?: true
    points_progression?: true
    tresors?: true
    prestige?: true
    origine?: true
    guide?: true
    eclaireur?: true
    chasseur?: true
    guetteur?: true
    lien_communaute?: true
    sanctuaires?: true
    garant?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nom?: true
    culture?: true
    niveau_de_vie?: true
    avantage_culturel?: true
    vocation?: true
    part_ombre?: true
    specialites?: true
    particularite?: true
    experience?: true
    experience_totale?: true
    vaillance?: true
    sagesse?: true
    corps?: true
    corps_ameliore?: true
    coeur?: true
    coeur_ameliore?: true
    esprit?: true
    esprit_ameliore?: true
    presence?: true
    athletisme?: true
    vigilance?: true
    exploration?: true
    chant?: true
    artisanat?: true
    inspiration?: true
    voyage?: true
    intuition?: true
    guerison?: true
    courtoisie?: true
    art_de_la_guerre?: true
    persuasion?: true
    discretion?: true
    fouille?: true
    chasse?: true
    enigmes?: true
    connaissances?: true
    personnalite?: true
    deplacement?: true
    perception?: true
    survie?: true
    coutume?: true
    metier?: true
    bonus_degats?: true
    bonus_degats_distance?: true
    parade?: true
    bouclier?: true
    armure?: true
    casque?: true
    recompenses?: true
    vertus?: true
    endurance?: true
    endurance_depart?: true
    fatigue?: true
    espoir?: true
    espoir_depart?: true
    ombre?: true
    epuisement?: true
    melancolie?: true
    blesse?: true
    communaute?: true
    points_progression?: true
    tresors?: true
    prestige?: true
    origine?: true
    guide?: true
    eclaireur?: true
    chasseur?: true
    guetteur?: true
    lien_communaute?: true
    sanctuaires?: true
    garant?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nom?: true
    culture?: true
    niveau_de_vie?: true
    avantage_culturel?: true
    vocation?: true
    part_ombre?: true
    specialites?: true
    particularite?: true
    experience?: true
    experience_totale?: true
    vaillance?: true
    sagesse?: true
    corps?: true
    corps_ameliore?: true
    coeur?: true
    coeur_ameliore?: true
    esprit?: true
    esprit_ameliore?: true
    presence?: true
    athletisme?: true
    vigilance?: true
    exploration?: true
    chant?: true
    artisanat?: true
    inspiration?: true
    voyage?: true
    intuition?: true
    guerison?: true
    courtoisie?: true
    art_de_la_guerre?: true
    persuasion?: true
    discretion?: true
    fouille?: true
    chasse?: true
    enigmes?: true
    connaissances?: true
    personnalite?: true
    deplacement?: true
    perception?: true
    survie?: true
    coutume?: true
    metier?: true
    bonus_degats?: true
    bonus_degats_distance?: true
    parade?: true
    bouclier?: true
    armure?: true
    casque?: true
    recompenses?: true
    vertus?: true
    endurance?: true
    endurance_depart?: true
    fatigue?: true
    espoir?: true
    espoir_depart?: true
    ombre?: true
    epuisement?: true
    melancolie?: true
    blesse?: true
    communaute?: true
    points_progression?: true
    tresors?: true
    prestige?: true
    origine?: true
    guide?: true
    eclaireur?: true
    chasseur?: true
    guetteur?: true
    lien_communaute?: true
    sanctuaires?: true
    garant?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nom: string
    culture: string
    niveau_de_vie: string
    avantage_culturel: string
    vocation: string
    part_ombre: string
    specialites: string
    particularite: string
    experience: number
    experience_totale: number
    vaillance: number
    sagesse: number
    corps: number
    corps_ameliore: number
    coeur: number
    coeur_ameliore: number
    esprit: number
    esprit_ameliore: number
    presence: number
    athletisme: number
    vigilance: number
    exploration: number
    chant: number
    artisanat: number
    inspiration: number
    voyage: number
    intuition: number
    guerison: number
    courtoisie: number
    art_de_la_guerre: number
    persuasion: number
    discretion: number
    fouille: number
    chasse: number
    enigmes: number
    connaissances: number
    personnalite: number
    deplacement: number
    perception: number
    survie: number
    coutume: number
    metier: number
    bonus_degats: string
    bonus_degats_distance: string
    parade: string
    bouclier: string
    armure: string
    casque: string
    recompenses: string
    vertus: string
    endurance: string
    endurance_depart: string
    fatigue: string
    espoir: string
    espoir_depart: string
    ombre: string
    epuisement: boolean
    melancolie: boolean
    blesse: boolean
    communaute: string
    points_progression: string
    tresors: string
    prestige: string
    origine: string
    guide: string
    eclaireur: string
    chasseur: string
    guetteur: string
    lien_communaute: string
    sanctuaires: string
    garant: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    culture?: boolean
    niveau_de_vie?: boolean
    avantage_culturel?: boolean
    vocation?: boolean
    part_ombre?: boolean
    specialites?: boolean
    particularite?: boolean
    experience?: boolean
    experience_totale?: boolean
    vaillance?: boolean
    sagesse?: boolean
    corps?: boolean
    corps_ameliore?: boolean
    coeur?: boolean
    coeur_ameliore?: boolean
    esprit?: boolean
    esprit_ameliore?: boolean
    presence?: boolean
    athletisme?: boolean
    vigilance?: boolean
    exploration?: boolean
    chant?: boolean
    artisanat?: boolean
    inspiration?: boolean
    voyage?: boolean
    intuition?: boolean
    guerison?: boolean
    courtoisie?: boolean
    art_de_la_guerre?: boolean
    persuasion?: boolean
    discretion?: boolean
    fouille?: boolean
    chasse?: boolean
    enigmes?: boolean
    connaissances?: boolean
    personnalite?: boolean
    deplacement?: boolean
    perception?: boolean
    survie?: boolean
    coutume?: boolean
    metier?: boolean
    bonus_degats?: boolean
    bonus_degats_distance?: boolean
    parade?: boolean
    bouclier?: boolean
    armure?: boolean
    casque?: boolean
    recompenses?: boolean
    vertus?: boolean
    endurance?: boolean
    endurance_depart?: boolean
    fatigue?: boolean
    espoir?: boolean
    espoir_depart?: boolean
    ombre?: boolean
    epuisement?: boolean
    melancolie?: boolean
    blesse?: boolean
    communaute?: boolean
    points_progression?: boolean
    tresors?: boolean
    prestige?: boolean
    origine?: boolean
    guide?: boolean
    eclaireur?: boolean
    chasseur?: boolean
    guetteur?: boolean
    lien_communaute?: boolean
    sanctuaires?: boolean
    garant?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    equipements?: boolean | User$equipementsArgs<ExtArgs>
    armes?: boolean | User$armesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    culture?: boolean
    niveau_de_vie?: boolean
    avantage_culturel?: boolean
    vocation?: boolean
    part_ombre?: boolean
    specialites?: boolean
    particularite?: boolean
    experience?: boolean
    experience_totale?: boolean
    vaillance?: boolean
    sagesse?: boolean
    corps?: boolean
    corps_ameliore?: boolean
    coeur?: boolean
    coeur_ameliore?: boolean
    esprit?: boolean
    esprit_ameliore?: boolean
    presence?: boolean
    athletisme?: boolean
    vigilance?: boolean
    exploration?: boolean
    chant?: boolean
    artisanat?: boolean
    inspiration?: boolean
    voyage?: boolean
    intuition?: boolean
    guerison?: boolean
    courtoisie?: boolean
    art_de_la_guerre?: boolean
    persuasion?: boolean
    discretion?: boolean
    fouille?: boolean
    chasse?: boolean
    enigmes?: boolean
    connaissances?: boolean
    personnalite?: boolean
    deplacement?: boolean
    perception?: boolean
    survie?: boolean
    coutume?: boolean
    metier?: boolean
    bonus_degats?: boolean
    bonus_degats_distance?: boolean
    parade?: boolean
    bouclier?: boolean
    armure?: boolean
    casque?: boolean
    recompenses?: boolean
    vertus?: boolean
    endurance?: boolean
    endurance_depart?: boolean
    fatigue?: boolean
    espoir?: boolean
    espoir_depart?: boolean
    ombre?: boolean
    epuisement?: boolean
    melancolie?: boolean
    blesse?: boolean
    communaute?: boolean
    points_progression?: boolean
    tresors?: boolean
    prestige?: boolean
    origine?: boolean
    guide?: boolean
    eclaireur?: boolean
    chasseur?: boolean
    guetteur?: boolean
    lien_communaute?: boolean
    sanctuaires?: boolean
    garant?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    culture?: boolean
    niveau_de_vie?: boolean
    avantage_culturel?: boolean
    vocation?: boolean
    part_ombre?: boolean
    specialites?: boolean
    particularite?: boolean
    experience?: boolean
    experience_totale?: boolean
    vaillance?: boolean
    sagesse?: boolean
    corps?: boolean
    corps_ameliore?: boolean
    coeur?: boolean
    coeur_ameliore?: boolean
    esprit?: boolean
    esprit_ameliore?: boolean
    presence?: boolean
    athletisme?: boolean
    vigilance?: boolean
    exploration?: boolean
    chant?: boolean
    artisanat?: boolean
    inspiration?: boolean
    voyage?: boolean
    intuition?: boolean
    guerison?: boolean
    courtoisie?: boolean
    art_de_la_guerre?: boolean
    persuasion?: boolean
    discretion?: boolean
    fouille?: boolean
    chasse?: boolean
    enigmes?: boolean
    connaissances?: boolean
    personnalite?: boolean
    deplacement?: boolean
    perception?: boolean
    survie?: boolean
    coutume?: boolean
    metier?: boolean
    bonus_degats?: boolean
    bonus_degats_distance?: boolean
    parade?: boolean
    bouclier?: boolean
    armure?: boolean
    casque?: boolean
    recompenses?: boolean
    vertus?: boolean
    endurance?: boolean
    endurance_depart?: boolean
    fatigue?: boolean
    espoir?: boolean
    espoir_depart?: boolean
    ombre?: boolean
    epuisement?: boolean
    melancolie?: boolean
    blesse?: boolean
    communaute?: boolean
    points_progression?: boolean
    tresors?: boolean
    prestige?: boolean
    origine?: boolean
    guide?: boolean
    eclaireur?: boolean
    chasseur?: boolean
    guetteur?: boolean
    lien_communaute?: boolean
    sanctuaires?: boolean
    garant?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nom?: boolean
    culture?: boolean
    niveau_de_vie?: boolean
    avantage_culturel?: boolean
    vocation?: boolean
    part_ombre?: boolean
    specialites?: boolean
    particularite?: boolean
    experience?: boolean
    experience_totale?: boolean
    vaillance?: boolean
    sagesse?: boolean
    corps?: boolean
    corps_ameliore?: boolean
    coeur?: boolean
    coeur_ameliore?: boolean
    esprit?: boolean
    esprit_ameliore?: boolean
    presence?: boolean
    athletisme?: boolean
    vigilance?: boolean
    exploration?: boolean
    chant?: boolean
    artisanat?: boolean
    inspiration?: boolean
    voyage?: boolean
    intuition?: boolean
    guerison?: boolean
    courtoisie?: boolean
    art_de_la_guerre?: boolean
    persuasion?: boolean
    discretion?: boolean
    fouille?: boolean
    chasse?: boolean
    enigmes?: boolean
    connaissances?: boolean
    personnalite?: boolean
    deplacement?: boolean
    perception?: boolean
    survie?: boolean
    coutume?: boolean
    metier?: boolean
    bonus_degats?: boolean
    bonus_degats_distance?: boolean
    parade?: boolean
    bouclier?: boolean
    armure?: boolean
    casque?: boolean
    recompenses?: boolean
    vertus?: boolean
    endurance?: boolean
    endurance_depart?: boolean
    fatigue?: boolean
    espoir?: boolean
    espoir_depart?: boolean
    ombre?: boolean
    epuisement?: boolean
    melancolie?: boolean
    blesse?: boolean
    communaute?: boolean
    points_progression?: boolean
    tresors?: boolean
    prestige?: boolean
    origine?: boolean
    guide?: boolean
    eclaireur?: boolean
    chasseur?: boolean
    guetteur?: boolean
    lien_communaute?: boolean
    sanctuaires?: boolean
    garant?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "culture" | "niveau_de_vie" | "avantage_culturel" | "vocation" | "part_ombre" | "specialites" | "particularite" | "experience" | "experience_totale" | "vaillance" | "sagesse" | "corps" | "corps_ameliore" | "coeur" | "coeur_ameliore" | "esprit" | "esprit_ameliore" | "presence" | "athletisme" | "vigilance" | "exploration" | "chant" | "artisanat" | "inspiration" | "voyage" | "intuition" | "guerison" | "courtoisie" | "art_de_la_guerre" | "persuasion" | "discretion" | "fouille" | "chasse" | "enigmes" | "connaissances" | "personnalite" | "deplacement" | "perception" | "survie" | "coutume" | "metier" | "bonus_degats" | "bonus_degats_distance" | "parade" | "bouclier" | "armure" | "casque" | "recompenses" | "vertus" | "endurance" | "endurance_depart" | "fatigue" | "espoir" | "espoir_depart" | "ombre" | "epuisement" | "melancolie" | "blesse" | "communaute" | "points_progression" | "tresors" | "prestige" | "origine" | "guide" | "eclaireur" | "chasseur" | "guetteur" | "lien_communaute" | "sanctuaires" | "garant" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipements?: boolean | User$equipementsArgs<ExtArgs>
    armes?: boolean | User$armesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      equipements: Prisma.$EquipmentPayload<ExtArgs>[]
      armes: Prisma.$WeaponPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      culture: string
      niveau_de_vie: string
      avantage_culturel: string
      vocation: string
      part_ombre: string
      specialites: string
      particularite: string
      experience: number
      experience_totale: number
      vaillance: number
      sagesse: number
      corps: number
      corps_ameliore: number
      coeur: number
      coeur_ameliore: number
      esprit: number
      esprit_ameliore: number
      presence: number
      athletisme: number
      vigilance: number
      exploration: number
      chant: number
      artisanat: number
      inspiration: number
      voyage: number
      intuition: number
      guerison: number
      courtoisie: number
      art_de_la_guerre: number
      persuasion: number
      discretion: number
      fouille: number
      chasse: number
      enigmes: number
      connaissances: number
      personnalite: number
      deplacement: number
      perception: number
      survie: number
      coutume: number
      metier: number
      bonus_degats: string
      bonus_degats_distance: string
      parade: string
      bouclier: string
      armure: string
      casque: string
      recompenses: string
      vertus: string
      endurance: string
      endurance_depart: string
      fatigue: string
      espoir: string
      espoir_depart: string
      ombre: string
      epuisement: boolean
      melancolie: boolean
      blesse: boolean
      communaute: string
      points_progression: string
      tresors: string
      prestige: string
      origine: string
      guide: string
      eclaireur: string
      chasseur: string
      guetteur: string
      lien_communaute: string
      sanctuaires: string
      garant: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipements<T extends User$equipementsArgs<ExtArgs> = {}>(args?: Subset<T, User$equipementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    armes<T extends User$armesArgs<ExtArgs> = {}>(args?: Subset<T, User$armesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nom: FieldRef<"User", 'String'>
    readonly culture: FieldRef<"User", 'String'>
    readonly niveau_de_vie: FieldRef<"User", 'String'>
    readonly avantage_culturel: FieldRef<"User", 'String'>
    readonly vocation: FieldRef<"User", 'String'>
    readonly part_ombre: FieldRef<"User", 'String'>
    readonly specialites: FieldRef<"User", 'String'>
    readonly particularite: FieldRef<"User", 'String'>
    readonly experience: FieldRef<"User", 'Int'>
    readonly experience_totale: FieldRef<"User", 'Int'>
    readonly vaillance: FieldRef<"User", 'Int'>
    readonly sagesse: FieldRef<"User", 'Int'>
    readonly corps: FieldRef<"User", 'Int'>
    readonly corps_ameliore: FieldRef<"User", 'Int'>
    readonly coeur: FieldRef<"User", 'Int'>
    readonly coeur_ameliore: FieldRef<"User", 'Int'>
    readonly esprit: FieldRef<"User", 'Int'>
    readonly esprit_ameliore: FieldRef<"User", 'Int'>
    readonly presence: FieldRef<"User", 'Int'>
    readonly athletisme: FieldRef<"User", 'Int'>
    readonly vigilance: FieldRef<"User", 'Int'>
    readonly exploration: FieldRef<"User", 'Int'>
    readonly chant: FieldRef<"User", 'Int'>
    readonly artisanat: FieldRef<"User", 'Int'>
    readonly inspiration: FieldRef<"User", 'Int'>
    readonly voyage: FieldRef<"User", 'Int'>
    readonly intuition: FieldRef<"User", 'Int'>
    readonly guerison: FieldRef<"User", 'Int'>
    readonly courtoisie: FieldRef<"User", 'Int'>
    readonly art_de_la_guerre: FieldRef<"User", 'Int'>
    readonly persuasion: FieldRef<"User", 'Int'>
    readonly discretion: FieldRef<"User", 'Int'>
    readonly fouille: FieldRef<"User", 'Int'>
    readonly chasse: FieldRef<"User", 'Int'>
    readonly enigmes: FieldRef<"User", 'Int'>
    readonly connaissances: FieldRef<"User", 'Int'>
    readonly personnalite: FieldRef<"User", 'Int'>
    readonly deplacement: FieldRef<"User", 'Int'>
    readonly perception: FieldRef<"User", 'Int'>
    readonly survie: FieldRef<"User", 'Int'>
    readonly coutume: FieldRef<"User", 'Int'>
    readonly metier: FieldRef<"User", 'Int'>
    readonly bonus_degats: FieldRef<"User", 'String'>
    readonly bonus_degats_distance: FieldRef<"User", 'String'>
    readonly parade: FieldRef<"User", 'String'>
    readonly bouclier: FieldRef<"User", 'String'>
    readonly armure: FieldRef<"User", 'String'>
    readonly casque: FieldRef<"User", 'String'>
    readonly recompenses: FieldRef<"User", 'String'>
    readonly vertus: FieldRef<"User", 'String'>
    readonly endurance: FieldRef<"User", 'String'>
    readonly endurance_depart: FieldRef<"User", 'String'>
    readonly fatigue: FieldRef<"User", 'String'>
    readonly espoir: FieldRef<"User", 'String'>
    readonly espoir_depart: FieldRef<"User", 'String'>
    readonly ombre: FieldRef<"User", 'String'>
    readonly epuisement: FieldRef<"User", 'Boolean'>
    readonly melancolie: FieldRef<"User", 'Boolean'>
    readonly blesse: FieldRef<"User", 'Boolean'>
    readonly communaute: FieldRef<"User", 'String'>
    readonly points_progression: FieldRef<"User", 'String'>
    readonly tresors: FieldRef<"User", 'String'>
    readonly prestige: FieldRef<"User", 'String'>
    readonly origine: FieldRef<"User", 'String'>
    readonly guide: FieldRef<"User", 'String'>
    readonly eclaireur: FieldRef<"User", 'String'>
    readonly chasseur: FieldRef<"User", 'String'>
    readonly guetteur: FieldRef<"User", 'String'>
    readonly lien_communaute: FieldRef<"User", 'String'>
    readonly sanctuaires: FieldRef<"User", 'String'>
    readonly garant: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.equipements
   */
  export type User$equipementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    cursor?: EquipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * User.armes
   */
  export type User$armesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
    where?: WeaponWhereInput
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    cursor?: WeaponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeaponScalarFieldEnum | WeaponScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Weapon
   */

  export type AggregateWeapon = {
    _count: WeaponCountAggregateOutputType | null
    _avg: WeaponAvgAggregateOutputType | null
    _sum: WeaponSumAggregateOutputType | null
    _min: WeaponMinAggregateOutputType | null
    _max: WeaponMaxAggregateOutputType | null
  }

  export type WeaponAvgAggregateOutputType = {
    index: number | null
    niveau: number | null
  }

  export type WeaponSumAggregateOutputType = {
    index: number | null
    niveau: number | null
  }

  export type WeaponMinAggregateOutputType = {
    id: string | null
    userId: string | null
    index: number | null
    niveau: number | null
    degats: string | null
    taille: string | null
    blessure: string | null
    enc: string | null
    nom: string | null
  }

  export type WeaponMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    index: number | null
    niveau: number | null
    degats: string | null
    taille: string | null
    blessure: string | null
    enc: string | null
    nom: string | null
  }

  export type WeaponCountAggregateOutputType = {
    id: number
    userId: number
    index: number
    niveau: number
    degats: number
    taille: number
    blessure: number
    enc: number
    nom: number
    _all: number
  }


  export type WeaponAvgAggregateInputType = {
    index?: true
    niveau?: true
  }

  export type WeaponSumAggregateInputType = {
    index?: true
    niveau?: true
  }

  export type WeaponMinAggregateInputType = {
    id?: true
    userId?: true
    index?: true
    niveau?: true
    degats?: true
    taille?: true
    blessure?: true
    enc?: true
    nom?: true
  }

  export type WeaponMaxAggregateInputType = {
    id?: true
    userId?: true
    index?: true
    niveau?: true
    degats?: true
    taille?: true
    blessure?: true
    enc?: true
    nom?: true
  }

  export type WeaponCountAggregateInputType = {
    id?: true
    userId?: true
    index?: true
    niveau?: true
    degats?: true
    taille?: true
    blessure?: true
    enc?: true
    nom?: true
    _all?: true
  }

  export type WeaponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weapon to aggregate.
     */
    where?: WeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weapons to fetch.
     */
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weapons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Weapons
    **/
    _count?: true | WeaponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeaponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeaponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeaponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeaponMaxAggregateInputType
  }

  export type GetWeaponAggregateType<T extends WeaponAggregateArgs> = {
        [P in keyof T & keyof AggregateWeapon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeapon[P]>
      : GetScalarType<T[P], AggregateWeapon[P]>
  }




  export type WeaponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeaponWhereInput
    orderBy?: WeaponOrderByWithAggregationInput | WeaponOrderByWithAggregationInput[]
    by: WeaponScalarFieldEnum[] | WeaponScalarFieldEnum
    having?: WeaponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeaponCountAggregateInputType | true
    _avg?: WeaponAvgAggregateInputType
    _sum?: WeaponSumAggregateInputType
    _min?: WeaponMinAggregateInputType
    _max?: WeaponMaxAggregateInputType
  }

  export type WeaponGroupByOutputType = {
    id: string
    userId: string
    index: number
    niveau: number
    degats: string
    taille: string
    blessure: string
    enc: string
    nom: string
    _count: WeaponCountAggregateOutputType | null
    _avg: WeaponAvgAggregateOutputType | null
    _sum: WeaponSumAggregateOutputType | null
    _min: WeaponMinAggregateOutputType | null
    _max: WeaponMaxAggregateOutputType | null
  }

  type GetWeaponGroupByPayload<T extends WeaponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeaponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeaponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeaponGroupByOutputType[P]>
            : GetScalarType<T[P], WeaponGroupByOutputType[P]>
        }
      >
    >


  export type WeaponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    index?: boolean
    niveau?: boolean
    degats?: boolean
    taille?: boolean
    blessure?: boolean
    enc?: boolean
    nom?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weapon"]>

  export type WeaponSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    index?: boolean
    niveau?: boolean
    degats?: boolean
    taille?: boolean
    blessure?: boolean
    enc?: boolean
    nom?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weapon"]>

  export type WeaponSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    index?: boolean
    niveau?: boolean
    degats?: boolean
    taille?: boolean
    blessure?: boolean
    enc?: boolean
    nom?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weapon"]>

  export type WeaponSelectScalar = {
    id?: boolean
    userId?: boolean
    index?: boolean
    niveau?: boolean
    degats?: boolean
    taille?: boolean
    blessure?: boolean
    enc?: boolean
    nom?: boolean
  }

  export type WeaponOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "index" | "niveau" | "degats" | "taille" | "blessure" | "enc" | "nom", ExtArgs["result"]["weapon"]>
  export type WeaponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeaponIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeaponIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WeaponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Weapon"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      index: number
      niveau: number
      degats: string
      taille: string
      blessure: string
      enc: string
      nom: string
    }, ExtArgs["result"]["weapon"]>
    composites: {}
  }

  type WeaponGetPayload<S extends boolean | null | undefined | WeaponDefaultArgs> = $Result.GetResult<Prisma.$WeaponPayload, S>

  type WeaponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeaponFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeaponCountAggregateInputType | true
    }

  export interface WeaponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Weapon'], meta: { name: 'Weapon' } }
    /**
     * Find zero or one Weapon that matches the filter.
     * @param {WeaponFindUniqueArgs} args - Arguments to find a Weapon
     * @example
     * // Get one Weapon
     * const weapon = await prisma.weapon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeaponFindUniqueArgs>(args: SelectSubset<T, WeaponFindUniqueArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Weapon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeaponFindUniqueOrThrowArgs} args - Arguments to find a Weapon
     * @example
     * // Get one Weapon
     * const weapon = await prisma.weapon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeaponFindUniqueOrThrowArgs>(args: SelectSubset<T, WeaponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Weapon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponFindFirstArgs} args - Arguments to find a Weapon
     * @example
     * // Get one Weapon
     * const weapon = await prisma.weapon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeaponFindFirstArgs>(args?: SelectSubset<T, WeaponFindFirstArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Weapon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponFindFirstOrThrowArgs} args - Arguments to find a Weapon
     * @example
     * // Get one Weapon
     * const weapon = await prisma.weapon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeaponFindFirstOrThrowArgs>(args?: SelectSubset<T, WeaponFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Weapons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weapons
     * const weapons = await prisma.weapon.findMany()
     * 
     * // Get first 10 Weapons
     * const weapons = await prisma.weapon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weaponWithIdOnly = await prisma.weapon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeaponFindManyArgs>(args?: SelectSubset<T, WeaponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Weapon.
     * @param {WeaponCreateArgs} args - Arguments to create a Weapon.
     * @example
     * // Create one Weapon
     * const Weapon = await prisma.weapon.create({
     *   data: {
     *     // ... data to create a Weapon
     *   }
     * })
     * 
     */
    create<T extends WeaponCreateArgs>(args: SelectSubset<T, WeaponCreateArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Weapons.
     * @param {WeaponCreateManyArgs} args - Arguments to create many Weapons.
     * @example
     * // Create many Weapons
     * const weapon = await prisma.weapon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeaponCreateManyArgs>(args?: SelectSubset<T, WeaponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Weapons and returns the data saved in the database.
     * @param {WeaponCreateManyAndReturnArgs} args - Arguments to create many Weapons.
     * @example
     * // Create many Weapons
     * const weapon = await prisma.weapon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Weapons and only return the `id`
     * const weaponWithIdOnly = await prisma.weapon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeaponCreateManyAndReturnArgs>(args?: SelectSubset<T, WeaponCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Weapon.
     * @param {WeaponDeleteArgs} args - Arguments to delete one Weapon.
     * @example
     * // Delete one Weapon
     * const Weapon = await prisma.weapon.delete({
     *   where: {
     *     // ... filter to delete one Weapon
     *   }
     * })
     * 
     */
    delete<T extends WeaponDeleteArgs>(args: SelectSubset<T, WeaponDeleteArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Weapon.
     * @param {WeaponUpdateArgs} args - Arguments to update one Weapon.
     * @example
     * // Update one Weapon
     * const weapon = await prisma.weapon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeaponUpdateArgs>(args: SelectSubset<T, WeaponUpdateArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Weapons.
     * @param {WeaponDeleteManyArgs} args - Arguments to filter Weapons to delete.
     * @example
     * // Delete a few Weapons
     * const { count } = await prisma.weapon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeaponDeleteManyArgs>(args?: SelectSubset<T, WeaponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weapons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weapons
     * const weapon = await prisma.weapon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeaponUpdateManyArgs>(args: SelectSubset<T, WeaponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weapons and returns the data updated in the database.
     * @param {WeaponUpdateManyAndReturnArgs} args - Arguments to update many Weapons.
     * @example
     * // Update many Weapons
     * const weapon = await prisma.weapon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Weapons and only return the `id`
     * const weaponWithIdOnly = await prisma.weapon.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WeaponUpdateManyAndReturnArgs>(args: SelectSubset<T, WeaponUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Weapon.
     * @param {WeaponUpsertArgs} args - Arguments to update or create a Weapon.
     * @example
     * // Update or create a Weapon
     * const weapon = await prisma.weapon.upsert({
     *   create: {
     *     // ... data to create a Weapon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Weapon we want to update
     *   }
     * })
     */
    upsert<T extends WeaponUpsertArgs>(args: SelectSubset<T, WeaponUpsertArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Weapons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponCountArgs} args - Arguments to filter Weapons to count.
     * @example
     * // Count the number of Weapons
     * const count = await prisma.weapon.count({
     *   where: {
     *     // ... the filter for the Weapons we want to count
     *   }
     * })
    **/
    count<T extends WeaponCountArgs>(
      args?: Subset<T, WeaponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeaponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Weapon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeaponAggregateArgs>(args: Subset<T, WeaponAggregateArgs>): Prisma.PrismaPromise<GetWeaponAggregateType<T>>

    /**
     * Group by Weapon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeaponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeaponGroupByArgs['orderBy'] }
        : { orderBy?: WeaponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeaponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeaponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Weapon model
   */
  readonly fields: WeaponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Weapon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeaponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Weapon model
   */
  interface WeaponFieldRefs {
    readonly id: FieldRef<"Weapon", 'String'>
    readonly userId: FieldRef<"Weapon", 'String'>
    readonly index: FieldRef<"Weapon", 'Int'>
    readonly niveau: FieldRef<"Weapon", 'Int'>
    readonly degats: FieldRef<"Weapon", 'String'>
    readonly taille: FieldRef<"Weapon", 'String'>
    readonly blessure: FieldRef<"Weapon", 'String'>
    readonly enc: FieldRef<"Weapon", 'String'>
    readonly nom: FieldRef<"Weapon", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Weapon findUnique
   */
  export type WeaponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * Filter, which Weapon to fetch.
     */
    where: WeaponWhereUniqueInput
  }

  /**
   * Weapon findUniqueOrThrow
   */
  export type WeaponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * Filter, which Weapon to fetch.
     */
    where: WeaponWhereUniqueInput
  }

  /**
   * Weapon findFirst
   */
  export type WeaponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * Filter, which Weapon to fetch.
     */
    where?: WeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weapons to fetch.
     */
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weapons.
     */
    cursor?: WeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weapons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weapons.
     */
    distinct?: WeaponScalarFieldEnum | WeaponScalarFieldEnum[]
  }

  /**
   * Weapon findFirstOrThrow
   */
  export type WeaponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * Filter, which Weapon to fetch.
     */
    where?: WeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weapons to fetch.
     */
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weapons.
     */
    cursor?: WeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weapons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weapons.
     */
    distinct?: WeaponScalarFieldEnum | WeaponScalarFieldEnum[]
  }

  /**
   * Weapon findMany
   */
  export type WeaponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * Filter, which Weapons to fetch.
     */
    where?: WeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weapons to fetch.
     */
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Weapons.
     */
    cursor?: WeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weapons.
     */
    skip?: number
    distinct?: WeaponScalarFieldEnum | WeaponScalarFieldEnum[]
  }

  /**
   * Weapon create
   */
  export type WeaponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * The data needed to create a Weapon.
     */
    data: XOR<WeaponCreateInput, WeaponUncheckedCreateInput>
  }

  /**
   * Weapon createMany
   */
  export type WeaponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Weapons.
     */
    data: WeaponCreateManyInput | WeaponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Weapon createManyAndReturn
   */
  export type WeaponCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * The data used to create many Weapons.
     */
    data: WeaponCreateManyInput | WeaponCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Weapon update
   */
  export type WeaponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * The data needed to update a Weapon.
     */
    data: XOR<WeaponUpdateInput, WeaponUncheckedUpdateInput>
    /**
     * Choose, which Weapon to update.
     */
    where: WeaponWhereUniqueInput
  }

  /**
   * Weapon updateMany
   */
  export type WeaponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Weapons.
     */
    data: XOR<WeaponUpdateManyMutationInput, WeaponUncheckedUpdateManyInput>
    /**
     * Filter which Weapons to update
     */
    where?: WeaponWhereInput
    /**
     * Limit how many Weapons to update.
     */
    limit?: number
  }

  /**
   * Weapon updateManyAndReturn
   */
  export type WeaponUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * The data used to update Weapons.
     */
    data: XOR<WeaponUpdateManyMutationInput, WeaponUncheckedUpdateManyInput>
    /**
     * Filter which Weapons to update
     */
    where?: WeaponWhereInput
    /**
     * Limit how many Weapons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Weapon upsert
   */
  export type WeaponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * The filter to search for the Weapon to update in case it exists.
     */
    where: WeaponWhereUniqueInput
    /**
     * In case the Weapon found by the `where` argument doesn't exist, create a new Weapon with this data.
     */
    create: XOR<WeaponCreateInput, WeaponUncheckedCreateInput>
    /**
     * In case the Weapon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeaponUpdateInput, WeaponUncheckedUpdateInput>
  }

  /**
   * Weapon delete
   */
  export type WeaponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * Filter which Weapon to delete.
     */
    where: WeaponWhereUniqueInput
  }

  /**
   * Weapon deleteMany
   */
  export type WeaponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weapons to delete
     */
    where?: WeaponWhereInput
    /**
     * Limit how many Weapons to delete.
     */
    limit?: number
  }

  /**
   * Weapon without action
   */
  export type WeaponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
  }


  /**
   * Model Equipment
   */

  export type AggregateEquipment = {
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  export type EquipmentAvgAggregateOutputType = {
    index: number | null
  }

  export type EquipmentSumAggregateOutputType = {
    index: number | null
  }

  export type EquipmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    index: number | null
    nom: string | null
    enc: string | null
  }

  export type EquipmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    index: number | null
    nom: string | null
    enc: string | null
  }

  export type EquipmentCountAggregateOutputType = {
    id: number
    userId: number
    index: number
    nom: number
    enc: number
    _all: number
  }


  export type EquipmentAvgAggregateInputType = {
    index?: true
  }

  export type EquipmentSumAggregateInputType = {
    index?: true
  }

  export type EquipmentMinAggregateInputType = {
    id?: true
    userId?: true
    index?: true
    nom?: true
    enc?: true
  }

  export type EquipmentMaxAggregateInputType = {
    id?: true
    userId?: true
    index?: true
    nom?: true
    enc?: true
  }

  export type EquipmentCountAggregateInputType = {
    id?: true
    userId?: true
    index?: true
    nom?: true
    enc?: true
    _all?: true
  }

  export type EquipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to aggregate.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipment
    **/
    _count?: true | EquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentMaxAggregateInputType
  }

  export type GetEquipmentAggregateType<T extends EquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipment[P]>
      : GetScalarType<T[P], AggregateEquipment[P]>
  }




  export type EquipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithAggregationInput | EquipmentOrderByWithAggregationInput[]
    by: EquipmentScalarFieldEnum[] | EquipmentScalarFieldEnum
    having?: EquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentCountAggregateInputType | true
    _avg?: EquipmentAvgAggregateInputType
    _sum?: EquipmentSumAggregateInputType
    _min?: EquipmentMinAggregateInputType
    _max?: EquipmentMaxAggregateInputType
  }

  export type EquipmentGroupByOutputType = {
    id: string
    userId: string
    index: number
    nom: string
    enc: string
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  type GetEquipmentGroupByPayload<T extends EquipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    index?: boolean
    nom?: boolean
    enc?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    index?: boolean
    nom?: boolean
    enc?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    index?: boolean
    nom?: boolean
    enc?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectScalar = {
    id?: boolean
    userId?: boolean
    index?: boolean
    nom?: boolean
    enc?: boolean
  }

  export type EquipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "index" | "nom" | "enc", ExtArgs["result"]["equipment"]>
  export type EquipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EquipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      index: number
      nom: string
      enc: string
    }, ExtArgs["result"]["equipment"]>
    composites: {}
  }

  type EquipmentGetPayload<S extends boolean | null | undefined | EquipmentDefaultArgs> = $Result.GetResult<Prisma.$EquipmentPayload, S>

  type EquipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentCountAggregateInputType | true
    }

  export interface EquipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipment'], meta: { name: 'Equipment' } }
    /**
     * Find zero or one Equipment that matches the filter.
     * @param {EquipmentFindUniqueArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentFindUniqueArgs>(args: SelectSubset<T, EquipmentFindUniqueArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentFindUniqueOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentFindFirstArgs>(args?: SelectSubset<T, EquipmentFindFirstArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipment
     * const equipment = await prisma.equipment.findMany()
     * 
     * // Get first 10 Equipment
     * const equipment = await prisma.equipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentWithIdOnly = await prisma.equipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentFindManyArgs>(args?: SelectSubset<T, EquipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipment.
     * @param {EquipmentCreateArgs} args - Arguments to create a Equipment.
     * @example
     * // Create one Equipment
     * const Equipment = await prisma.equipment.create({
     *   data: {
     *     // ... data to create a Equipment
     *   }
     * })
     * 
     */
    create<T extends EquipmentCreateArgs>(args: SelectSubset<T, EquipmentCreateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipment.
     * @param {EquipmentCreateManyArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentCreateManyArgs>(args?: SelectSubset<T, EquipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipment and returns the data saved in the database.
     * @param {EquipmentCreateManyAndReturnArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipment.
     * @param {EquipmentDeleteArgs} args - Arguments to delete one Equipment.
     * @example
     * // Delete one Equipment
     * const Equipment = await prisma.equipment.delete({
     *   where: {
     *     // ... filter to delete one Equipment
     *   }
     * })
     * 
     */
    delete<T extends EquipmentDeleteArgs>(args: SelectSubset<T, EquipmentDeleteArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipment.
     * @param {EquipmentUpdateArgs} args - Arguments to update one Equipment.
     * @example
     * // Update one Equipment
     * const equipment = await prisma.equipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentUpdateArgs>(args: SelectSubset<T, EquipmentUpdateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipment.
     * @param {EquipmentDeleteManyArgs} args - Arguments to filter Equipment to delete.
     * @example
     * // Delete a few Equipment
     * const { count } = await prisma.equipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentDeleteManyArgs>(args?: SelectSubset<T, EquipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentUpdateManyArgs>(args: SelectSubset<T, EquipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment and returns the data updated in the database.
     * @param {EquipmentUpdateManyAndReturnArgs} args - Arguments to update many Equipment.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipment.
     * @param {EquipmentUpsertArgs} args - Arguments to update or create a Equipment.
     * @example
     * // Update or create a Equipment
     * const equipment = await prisma.equipment.upsert({
     *   create: {
     *     // ... data to create a Equipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipment we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentUpsertArgs>(args: SelectSubset<T, EquipmentUpsertArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCountArgs} args - Arguments to filter Equipment to count.
     * @example
     * // Count the number of Equipment
     * const count = await prisma.equipment.count({
     *   where: {
     *     // ... the filter for the Equipment we want to count
     *   }
     * })
    **/
    count<T extends EquipmentCountArgs>(
      args?: Subset<T, EquipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipmentAggregateArgs>(args: Subset<T, EquipmentAggregateArgs>): Prisma.PrismaPromise<GetEquipmentAggregateType<T>>

    /**
     * Group by Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipment model
   */
  readonly fields: EquipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Equipment model
   */
  interface EquipmentFieldRefs {
    readonly id: FieldRef<"Equipment", 'String'>
    readonly userId: FieldRef<"Equipment", 'String'>
    readonly index: FieldRef<"Equipment", 'Int'>
    readonly nom: FieldRef<"Equipment", 'String'>
    readonly enc: FieldRef<"Equipment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Equipment findUnique
   */
  export type EquipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findUniqueOrThrow
   */
  export type EquipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findFirst
   */
  export type EquipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findFirstOrThrow
   */
  export type EquipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findMany
   */
  export type EquipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment create
   */
  export type EquipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipment.
     */
    data: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
  }

  /**
   * Equipment createMany
   */
  export type EquipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipment createManyAndReturn
   */
  export type EquipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipment update
   */
  export type EquipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipment.
     */
    data: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
    /**
     * Choose, which Equipment to update.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment updateMany
   */
  export type EquipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
  }

  /**
   * Equipment updateManyAndReturn
   */
  export type EquipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipment upsert
   */
  export type EquipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipment to update in case it exists.
     */
    where: EquipmentWhereUniqueInput
    /**
     * In case the Equipment found by the `where` argument doesn't exist, create a new Equipment with this data.
     */
    create: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
    /**
     * In case the Equipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
  }

  /**
   * Equipment delete
   */
  export type EquipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter which Equipment to delete.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment deleteMany
   */
  export type EquipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to delete
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to delete.
     */
    limit?: number
  }

  /**
   * Equipment without action
   */
  export type EquipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    culture: 'culture',
    niveau_de_vie: 'niveau_de_vie',
    avantage_culturel: 'avantage_culturel',
    vocation: 'vocation',
    part_ombre: 'part_ombre',
    specialites: 'specialites',
    particularite: 'particularite',
    experience: 'experience',
    experience_totale: 'experience_totale',
    vaillance: 'vaillance',
    sagesse: 'sagesse',
    corps: 'corps',
    corps_ameliore: 'corps_ameliore',
    coeur: 'coeur',
    coeur_ameliore: 'coeur_ameliore',
    esprit: 'esprit',
    esprit_ameliore: 'esprit_ameliore',
    presence: 'presence',
    athletisme: 'athletisme',
    vigilance: 'vigilance',
    exploration: 'exploration',
    chant: 'chant',
    artisanat: 'artisanat',
    inspiration: 'inspiration',
    voyage: 'voyage',
    intuition: 'intuition',
    guerison: 'guerison',
    courtoisie: 'courtoisie',
    art_de_la_guerre: 'art_de_la_guerre',
    persuasion: 'persuasion',
    discretion: 'discretion',
    fouille: 'fouille',
    chasse: 'chasse',
    enigmes: 'enigmes',
    connaissances: 'connaissances',
    personnalite: 'personnalite',
    deplacement: 'deplacement',
    perception: 'perception',
    survie: 'survie',
    coutume: 'coutume',
    metier: 'metier',
    bonus_degats: 'bonus_degats',
    bonus_degats_distance: 'bonus_degats_distance',
    parade: 'parade',
    bouclier: 'bouclier',
    armure: 'armure',
    casque: 'casque',
    recompenses: 'recompenses',
    vertus: 'vertus',
    endurance: 'endurance',
    endurance_depart: 'endurance_depart',
    fatigue: 'fatigue',
    espoir: 'espoir',
    espoir_depart: 'espoir_depart',
    ombre: 'ombre',
    epuisement: 'epuisement',
    melancolie: 'melancolie',
    blesse: 'blesse',
    communaute: 'communaute',
    points_progression: 'points_progression',
    tresors: 'tresors',
    prestige: 'prestige',
    origine: 'origine',
    guide: 'guide',
    eclaireur: 'eclaireur',
    chasseur: 'chasseur',
    guetteur: 'guetteur',
    lien_communaute: 'lien_communaute',
    sanctuaires: 'sanctuaires',
    garant: 'garant',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WeaponScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    index: 'index',
    niveau: 'niveau',
    degats: 'degats',
    taille: 'taille',
    blessure: 'blessure',
    enc: 'enc',
    nom: 'nom'
  };

  export type WeaponScalarFieldEnum = (typeof WeaponScalarFieldEnum)[keyof typeof WeaponScalarFieldEnum]


  export const EquipmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    index: 'index',
    nom: 'nom',
    enc: 'enc'
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nom?: StringFilter<"User"> | string
    culture?: StringFilter<"User"> | string
    niveau_de_vie?: StringFilter<"User"> | string
    avantage_culturel?: StringFilter<"User"> | string
    vocation?: StringFilter<"User"> | string
    part_ombre?: StringFilter<"User"> | string
    specialites?: StringFilter<"User"> | string
    particularite?: StringFilter<"User"> | string
    experience?: IntFilter<"User"> | number
    experience_totale?: IntFilter<"User"> | number
    vaillance?: IntFilter<"User"> | number
    sagesse?: IntFilter<"User"> | number
    corps?: IntFilter<"User"> | number
    corps_ameliore?: IntFilter<"User"> | number
    coeur?: IntFilter<"User"> | number
    coeur_ameliore?: IntFilter<"User"> | number
    esprit?: IntFilter<"User"> | number
    esprit_ameliore?: IntFilter<"User"> | number
    presence?: IntFilter<"User"> | number
    athletisme?: IntFilter<"User"> | number
    vigilance?: IntFilter<"User"> | number
    exploration?: IntFilter<"User"> | number
    chant?: IntFilter<"User"> | number
    artisanat?: IntFilter<"User"> | number
    inspiration?: IntFilter<"User"> | number
    voyage?: IntFilter<"User"> | number
    intuition?: IntFilter<"User"> | number
    guerison?: IntFilter<"User"> | number
    courtoisie?: IntFilter<"User"> | number
    art_de_la_guerre?: IntFilter<"User"> | number
    persuasion?: IntFilter<"User"> | number
    discretion?: IntFilter<"User"> | number
    fouille?: IntFilter<"User"> | number
    chasse?: IntFilter<"User"> | number
    enigmes?: IntFilter<"User"> | number
    connaissances?: IntFilter<"User"> | number
    personnalite?: IntFilter<"User"> | number
    deplacement?: IntFilter<"User"> | number
    perception?: IntFilter<"User"> | number
    survie?: IntFilter<"User"> | number
    coutume?: IntFilter<"User"> | number
    metier?: IntFilter<"User"> | number
    bonus_degats?: StringFilter<"User"> | string
    bonus_degats_distance?: StringFilter<"User"> | string
    parade?: StringFilter<"User"> | string
    bouclier?: StringFilter<"User"> | string
    armure?: StringFilter<"User"> | string
    casque?: StringFilter<"User"> | string
    recompenses?: StringFilter<"User"> | string
    vertus?: StringFilter<"User"> | string
    endurance?: StringFilter<"User"> | string
    endurance_depart?: StringFilter<"User"> | string
    fatigue?: StringFilter<"User"> | string
    espoir?: StringFilter<"User"> | string
    espoir_depart?: StringFilter<"User"> | string
    ombre?: StringFilter<"User"> | string
    epuisement?: BoolFilter<"User"> | boolean
    melancolie?: BoolFilter<"User"> | boolean
    blesse?: BoolFilter<"User"> | boolean
    communaute?: StringFilter<"User"> | string
    points_progression?: StringFilter<"User"> | string
    tresors?: StringFilter<"User"> | string
    prestige?: StringFilter<"User"> | string
    origine?: StringFilter<"User"> | string
    guide?: StringFilter<"User"> | string
    eclaireur?: StringFilter<"User"> | string
    chasseur?: StringFilter<"User"> | string
    guetteur?: StringFilter<"User"> | string
    lien_communaute?: StringFilter<"User"> | string
    sanctuaires?: StringFilter<"User"> | string
    garant?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    equipements?: EquipmentListRelationFilter
    armes?: WeaponListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    culture?: SortOrder
    niveau_de_vie?: SortOrder
    avantage_culturel?: SortOrder
    vocation?: SortOrder
    part_ombre?: SortOrder
    specialites?: SortOrder
    particularite?: SortOrder
    experience?: SortOrder
    experience_totale?: SortOrder
    vaillance?: SortOrder
    sagesse?: SortOrder
    corps?: SortOrder
    corps_ameliore?: SortOrder
    coeur?: SortOrder
    coeur_ameliore?: SortOrder
    esprit?: SortOrder
    esprit_ameliore?: SortOrder
    presence?: SortOrder
    athletisme?: SortOrder
    vigilance?: SortOrder
    exploration?: SortOrder
    chant?: SortOrder
    artisanat?: SortOrder
    inspiration?: SortOrder
    voyage?: SortOrder
    intuition?: SortOrder
    guerison?: SortOrder
    courtoisie?: SortOrder
    art_de_la_guerre?: SortOrder
    persuasion?: SortOrder
    discretion?: SortOrder
    fouille?: SortOrder
    chasse?: SortOrder
    enigmes?: SortOrder
    connaissances?: SortOrder
    personnalite?: SortOrder
    deplacement?: SortOrder
    perception?: SortOrder
    survie?: SortOrder
    coutume?: SortOrder
    metier?: SortOrder
    bonus_degats?: SortOrder
    bonus_degats_distance?: SortOrder
    parade?: SortOrder
    bouclier?: SortOrder
    armure?: SortOrder
    casque?: SortOrder
    recompenses?: SortOrder
    vertus?: SortOrder
    endurance?: SortOrder
    endurance_depart?: SortOrder
    fatigue?: SortOrder
    espoir?: SortOrder
    espoir_depart?: SortOrder
    ombre?: SortOrder
    epuisement?: SortOrder
    melancolie?: SortOrder
    blesse?: SortOrder
    communaute?: SortOrder
    points_progression?: SortOrder
    tresors?: SortOrder
    prestige?: SortOrder
    origine?: SortOrder
    guide?: SortOrder
    eclaireur?: SortOrder
    chasseur?: SortOrder
    guetteur?: SortOrder
    lien_communaute?: SortOrder
    sanctuaires?: SortOrder
    garant?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    equipements?: EquipmentOrderByRelationAggregateInput
    armes?: WeaponOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nom?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    culture?: StringFilter<"User"> | string
    niveau_de_vie?: StringFilter<"User"> | string
    avantage_culturel?: StringFilter<"User"> | string
    vocation?: StringFilter<"User"> | string
    part_ombre?: StringFilter<"User"> | string
    specialites?: StringFilter<"User"> | string
    particularite?: StringFilter<"User"> | string
    experience?: IntFilter<"User"> | number
    experience_totale?: IntFilter<"User"> | number
    vaillance?: IntFilter<"User"> | number
    sagesse?: IntFilter<"User"> | number
    corps?: IntFilter<"User"> | number
    corps_ameliore?: IntFilter<"User"> | number
    coeur?: IntFilter<"User"> | number
    coeur_ameliore?: IntFilter<"User"> | number
    esprit?: IntFilter<"User"> | number
    esprit_ameliore?: IntFilter<"User"> | number
    presence?: IntFilter<"User"> | number
    athletisme?: IntFilter<"User"> | number
    vigilance?: IntFilter<"User"> | number
    exploration?: IntFilter<"User"> | number
    chant?: IntFilter<"User"> | number
    artisanat?: IntFilter<"User"> | number
    inspiration?: IntFilter<"User"> | number
    voyage?: IntFilter<"User"> | number
    intuition?: IntFilter<"User"> | number
    guerison?: IntFilter<"User"> | number
    courtoisie?: IntFilter<"User"> | number
    art_de_la_guerre?: IntFilter<"User"> | number
    persuasion?: IntFilter<"User"> | number
    discretion?: IntFilter<"User"> | number
    fouille?: IntFilter<"User"> | number
    chasse?: IntFilter<"User"> | number
    enigmes?: IntFilter<"User"> | number
    connaissances?: IntFilter<"User"> | number
    personnalite?: IntFilter<"User"> | number
    deplacement?: IntFilter<"User"> | number
    perception?: IntFilter<"User"> | number
    survie?: IntFilter<"User"> | number
    coutume?: IntFilter<"User"> | number
    metier?: IntFilter<"User"> | number
    bonus_degats?: StringFilter<"User"> | string
    bonus_degats_distance?: StringFilter<"User"> | string
    parade?: StringFilter<"User"> | string
    bouclier?: StringFilter<"User"> | string
    armure?: StringFilter<"User"> | string
    casque?: StringFilter<"User"> | string
    recompenses?: StringFilter<"User"> | string
    vertus?: StringFilter<"User"> | string
    endurance?: StringFilter<"User"> | string
    endurance_depart?: StringFilter<"User"> | string
    fatigue?: StringFilter<"User"> | string
    espoir?: StringFilter<"User"> | string
    espoir_depart?: StringFilter<"User"> | string
    ombre?: StringFilter<"User"> | string
    epuisement?: BoolFilter<"User"> | boolean
    melancolie?: BoolFilter<"User"> | boolean
    blesse?: BoolFilter<"User"> | boolean
    communaute?: StringFilter<"User"> | string
    points_progression?: StringFilter<"User"> | string
    tresors?: StringFilter<"User"> | string
    prestige?: StringFilter<"User"> | string
    origine?: StringFilter<"User"> | string
    guide?: StringFilter<"User"> | string
    eclaireur?: StringFilter<"User"> | string
    chasseur?: StringFilter<"User"> | string
    guetteur?: StringFilter<"User"> | string
    lien_communaute?: StringFilter<"User"> | string
    sanctuaires?: StringFilter<"User"> | string
    garant?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    equipements?: EquipmentListRelationFilter
    armes?: WeaponListRelationFilter
  }, "id" | "nom">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    culture?: SortOrder
    niveau_de_vie?: SortOrder
    avantage_culturel?: SortOrder
    vocation?: SortOrder
    part_ombre?: SortOrder
    specialites?: SortOrder
    particularite?: SortOrder
    experience?: SortOrder
    experience_totale?: SortOrder
    vaillance?: SortOrder
    sagesse?: SortOrder
    corps?: SortOrder
    corps_ameliore?: SortOrder
    coeur?: SortOrder
    coeur_ameliore?: SortOrder
    esprit?: SortOrder
    esprit_ameliore?: SortOrder
    presence?: SortOrder
    athletisme?: SortOrder
    vigilance?: SortOrder
    exploration?: SortOrder
    chant?: SortOrder
    artisanat?: SortOrder
    inspiration?: SortOrder
    voyage?: SortOrder
    intuition?: SortOrder
    guerison?: SortOrder
    courtoisie?: SortOrder
    art_de_la_guerre?: SortOrder
    persuasion?: SortOrder
    discretion?: SortOrder
    fouille?: SortOrder
    chasse?: SortOrder
    enigmes?: SortOrder
    connaissances?: SortOrder
    personnalite?: SortOrder
    deplacement?: SortOrder
    perception?: SortOrder
    survie?: SortOrder
    coutume?: SortOrder
    metier?: SortOrder
    bonus_degats?: SortOrder
    bonus_degats_distance?: SortOrder
    parade?: SortOrder
    bouclier?: SortOrder
    armure?: SortOrder
    casque?: SortOrder
    recompenses?: SortOrder
    vertus?: SortOrder
    endurance?: SortOrder
    endurance_depart?: SortOrder
    fatigue?: SortOrder
    espoir?: SortOrder
    espoir_depart?: SortOrder
    ombre?: SortOrder
    epuisement?: SortOrder
    melancolie?: SortOrder
    blesse?: SortOrder
    communaute?: SortOrder
    points_progression?: SortOrder
    tresors?: SortOrder
    prestige?: SortOrder
    origine?: SortOrder
    guide?: SortOrder
    eclaireur?: SortOrder
    chasseur?: SortOrder
    guetteur?: SortOrder
    lien_communaute?: SortOrder
    sanctuaires?: SortOrder
    garant?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nom?: StringWithAggregatesFilter<"User"> | string
    culture?: StringWithAggregatesFilter<"User"> | string
    niveau_de_vie?: StringWithAggregatesFilter<"User"> | string
    avantage_culturel?: StringWithAggregatesFilter<"User"> | string
    vocation?: StringWithAggregatesFilter<"User"> | string
    part_ombre?: StringWithAggregatesFilter<"User"> | string
    specialites?: StringWithAggregatesFilter<"User"> | string
    particularite?: StringWithAggregatesFilter<"User"> | string
    experience?: IntWithAggregatesFilter<"User"> | number
    experience_totale?: IntWithAggregatesFilter<"User"> | number
    vaillance?: IntWithAggregatesFilter<"User"> | number
    sagesse?: IntWithAggregatesFilter<"User"> | number
    corps?: IntWithAggregatesFilter<"User"> | number
    corps_ameliore?: IntWithAggregatesFilter<"User"> | number
    coeur?: IntWithAggregatesFilter<"User"> | number
    coeur_ameliore?: IntWithAggregatesFilter<"User"> | number
    esprit?: IntWithAggregatesFilter<"User"> | number
    esprit_ameliore?: IntWithAggregatesFilter<"User"> | number
    presence?: IntWithAggregatesFilter<"User"> | number
    athletisme?: IntWithAggregatesFilter<"User"> | number
    vigilance?: IntWithAggregatesFilter<"User"> | number
    exploration?: IntWithAggregatesFilter<"User"> | number
    chant?: IntWithAggregatesFilter<"User"> | number
    artisanat?: IntWithAggregatesFilter<"User"> | number
    inspiration?: IntWithAggregatesFilter<"User"> | number
    voyage?: IntWithAggregatesFilter<"User"> | number
    intuition?: IntWithAggregatesFilter<"User"> | number
    guerison?: IntWithAggregatesFilter<"User"> | number
    courtoisie?: IntWithAggregatesFilter<"User"> | number
    art_de_la_guerre?: IntWithAggregatesFilter<"User"> | number
    persuasion?: IntWithAggregatesFilter<"User"> | number
    discretion?: IntWithAggregatesFilter<"User"> | number
    fouille?: IntWithAggregatesFilter<"User"> | number
    chasse?: IntWithAggregatesFilter<"User"> | number
    enigmes?: IntWithAggregatesFilter<"User"> | number
    connaissances?: IntWithAggregatesFilter<"User"> | number
    personnalite?: IntWithAggregatesFilter<"User"> | number
    deplacement?: IntWithAggregatesFilter<"User"> | number
    perception?: IntWithAggregatesFilter<"User"> | number
    survie?: IntWithAggregatesFilter<"User"> | number
    coutume?: IntWithAggregatesFilter<"User"> | number
    metier?: IntWithAggregatesFilter<"User"> | number
    bonus_degats?: StringWithAggregatesFilter<"User"> | string
    bonus_degats_distance?: StringWithAggregatesFilter<"User"> | string
    parade?: StringWithAggregatesFilter<"User"> | string
    bouclier?: StringWithAggregatesFilter<"User"> | string
    armure?: StringWithAggregatesFilter<"User"> | string
    casque?: StringWithAggregatesFilter<"User"> | string
    recompenses?: StringWithAggregatesFilter<"User"> | string
    vertus?: StringWithAggregatesFilter<"User"> | string
    endurance?: StringWithAggregatesFilter<"User"> | string
    endurance_depart?: StringWithAggregatesFilter<"User"> | string
    fatigue?: StringWithAggregatesFilter<"User"> | string
    espoir?: StringWithAggregatesFilter<"User"> | string
    espoir_depart?: StringWithAggregatesFilter<"User"> | string
    ombre?: StringWithAggregatesFilter<"User"> | string
    epuisement?: BoolWithAggregatesFilter<"User"> | boolean
    melancolie?: BoolWithAggregatesFilter<"User"> | boolean
    blesse?: BoolWithAggregatesFilter<"User"> | boolean
    communaute?: StringWithAggregatesFilter<"User"> | string
    points_progression?: StringWithAggregatesFilter<"User"> | string
    tresors?: StringWithAggregatesFilter<"User"> | string
    prestige?: StringWithAggregatesFilter<"User"> | string
    origine?: StringWithAggregatesFilter<"User"> | string
    guide?: StringWithAggregatesFilter<"User"> | string
    eclaireur?: StringWithAggregatesFilter<"User"> | string
    chasseur?: StringWithAggregatesFilter<"User"> | string
    guetteur?: StringWithAggregatesFilter<"User"> | string
    lien_communaute?: StringWithAggregatesFilter<"User"> | string
    sanctuaires?: StringWithAggregatesFilter<"User"> | string
    garant?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WeaponWhereInput = {
    AND?: WeaponWhereInput | WeaponWhereInput[]
    OR?: WeaponWhereInput[]
    NOT?: WeaponWhereInput | WeaponWhereInput[]
    id?: StringFilter<"Weapon"> | string
    userId?: StringFilter<"Weapon"> | string
    index?: IntFilter<"Weapon"> | number
    niveau?: IntFilter<"Weapon"> | number
    degats?: StringFilter<"Weapon"> | string
    taille?: StringFilter<"Weapon"> | string
    blessure?: StringFilter<"Weapon"> | string
    enc?: StringFilter<"Weapon"> | string
    nom?: StringFilter<"Weapon"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WeaponOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    index?: SortOrder
    niveau?: SortOrder
    degats?: SortOrder
    taille?: SortOrder
    blessure?: SortOrder
    enc?: SortOrder
    nom?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WeaponWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_index?: WeaponUserIdIndexCompoundUniqueInput
    AND?: WeaponWhereInput | WeaponWhereInput[]
    OR?: WeaponWhereInput[]
    NOT?: WeaponWhereInput | WeaponWhereInput[]
    userId?: StringFilter<"Weapon"> | string
    index?: IntFilter<"Weapon"> | number
    niveau?: IntFilter<"Weapon"> | number
    degats?: StringFilter<"Weapon"> | string
    taille?: StringFilter<"Weapon"> | string
    blessure?: StringFilter<"Weapon"> | string
    enc?: StringFilter<"Weapon"> | string
    nom?: StringFilter<"Weapon"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_index">

  export type WeaponOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    index?: SortOrder
    niveau?: SortOrder
    degats?: SortOrder
    taille?: SortOrder
    blessure?: SortOrder
    enc?: SortOrder
    nom?: SortOrder
    _count?: WeaponCountOrderByAggregateInput
    _avg?: WeaponAvgOrderByAggregateInput
    _max?: WeaponMaxOrderByAggregateInput
    _min?: WeaponMinOrderByAggregateInput
    _sum?: WeaponSumOrderByAggregateInput
  }

  export type WeaponScalarWhereWithAggregatesInput = {
    AND?: WeaponScalarWhereWithAggregatesInput | WeaponScalarWhereWithAggregatesInput[]
    OR?: WeaponScalarWhereWithAggregatesInput[]
    NOT?: WeaponScalarWhereWithAggregatesInput | WeaponScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Weapon"> | string
    userId?: StringWithAggregatesFilter<"Weapon"> | string
    index?: IntWithAggregatesFilter<"Weapon"> | number
    niveau?: IntWithAggregatesFilter<"Weapon"> | number
    degats?: StringWithAggregatesFilter<"Weapon"> | string
    taille?: StringWithAggregatesFilter<"Weapon"> | string
    blessure?: StringWithAggregatesFilter<"Weapon"> | string
    enc?: StringWithAggregatesFilter<"Weapon"> | string
    nom?: StringWithAggregatesFilter<"Weapon"> | string
  }

  export type EquipmentWhereInput = {
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    id?: StringFilter<"Equipment"> | string
    userId?: StringFilter<"Equipment"> | string
    index?: IntFilter<"Equipment"> | number
    nom?: StringFilter<"Equipment"> | string
    enc?: StringFilter<"Equipment"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EquipmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    index?: SortOrder
    nom?: SortOrder
    enc?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EquipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_index?: EquipmentUserIdIndexCompoundUniqueInput
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    userId?: StringFilter<"Equipment"> | string
    index?: IntFilter<"Equipment"> | number
    nom?: StringFilter<"Equipment"> | string
    enc?: StringFilter<"Equipment"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_index">

  export type EquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    index?: SortOrder
    nom?: SortOrder
    enc?: SortOrder
    _count?: EquipmentCountOrderByAggregateInput
    _avg?: EquipmentAvgOrderByAggregateInput
    _max?: EquipmentMaxOrderByAggregateInput
    _min?: EquipmentMinOrderByAggregateInput
    _sum?: EquipmentSumOrderByAggregateInput
  }

  export type EquipmentScalarWhereWithAggregatesInput = {
    AND?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    OR?: EquipmentScalarWhereWithAggregatesInput[]
    NOT?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Equipment"> | string
    userId?: StringWithAggregatesFilter<"Equipment"> | string
    index?: IntWithAggregatesFilter<"Equipment"> | number
    nom?: StringWithAggregatesFilter<"Equipment"> | string
    enc?: StringWithAggregatesFilter<"Equipment"> | string
  }

  export type UserCreateInput = {
    id?: string
    nom: string
    culture: string
    niveau_de_vie: string
    avantage_culturel: string
    vocation: string
    part_ombre: string
    specialites: string
    particularite: string
    experience: number
    experience_totale: number
    vaillance: number
    sagesse: number
    corps: number
    corps_ameliore: number
    coeur: number
    coeur_ameliore: number
    esprit: number
    esprit_ameliore: number
    presence: number
    athletisme: number
    vigilance: number
    exploration: number
    chant: number
    artisanat: number
    inspiration: number
    voyage: number
    intuition: number
    guerison: number
    courtoisie: number
    art_de_la_guerre: number
    persuasion: number
    discretion: number
    fouille: number
    chasse: number
    enigmes: number
    connaissances: number
    personnalite: number
    deplacement: number
    perception: number
    survie: number
    coutume: number
    metier: number
    bonus_degats?: string
    bonus_degats_distance?: string
    parade?: string
    bouclier?: string
    armure?: string
    casque?: string
    recompenses?: string
    vertus?: string
    endurance: string
    endurance_depart: string
    fatigue: string
    espoir: string
    espoir_depart: string
    ombre: string
    epuisement: boolean
    melancolie: boolean
    blesse: boolean
    communaute: string
    points_progression: string
    tresors: string
    prestige: string
    origine: string
    guide?: string
    eclaireur: string
    chasseur: string
    guetteur: string
    lien_communaute: string
    sanctuaires: string
    garant: string
    createdAt?: Date | string
    updatedAt?: Date | string
    equipements?: EquipmentCreateNestedManyWithoutUserInput
    armes?: WeaponCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nom: string
    culture: string
    niveau_de_vie: string
    avantage_culturel: string
    vocation: string
    part_ombre: string
    specialites: string
    particularite: string
    experience: number
    experience_totale: number
    vaillance: number
    sagesse: number
    corps: number
    corps_ameliore: number
    coeur: number
    coeur_ameliore: number
    esprit: number
    esprit_ameliore: number
    presence: number
    athletisme: number
    vigilance: number
    exploration: number
    chant: number
    artisanat: number
    inspiration: number
    voyage: number
    intuition: number
    guerison: number
    courtoisie: number
    art_de_la_guerre: number
    persuasion: number
    discretion: number
    fouille: number
    chasse: number
    enigmes: number
    connaissances: number
    personnalite: number
    deplacement: number
    perception: number
    survie: number
    coutume: number
    metier: number
    bonus_degats?: string
    bonus_degats_distance?: string
    parade?: string
    bouclier?: string
    armure?: string
    casque?: string
    recompenses?: string
    vertus?: string
    endurance: string
    endurance_depart: string
    fatigue: string
    espoir: string
    espoir_depart: string
    ombre: string
    epuisement: boolean
    melancolie: boolean
    blesse: boolean
    communaute: string
    points_progression: string
    tresors: string
    prestige: string
    origine: string
    guide?: string
    eclaireur: string
    chasseur: string
    guetteur: string
    lien_communaute: string
    sanctuaires: string
    garant: string
    createdAt?: Date | string
    updatedAt?: Date | string
    equipements?: EquipmentUncheckedCreateNestedManyWithoutUserInput
    armes?: WeaponUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    culture?: StringFieldUpdateOperationsInput | string
    niveau_de_vie?: StringFieldUpdateOperationsInput | string
    avantage_culturel?: StringFieldUpdateOperationsInput | string
    vocation?: StringFieldUpdateOperationsInput | string
    part_ombre?: StringFieldUpdateOperationsInput | string
    specialites?: StringFieldUpdateOperationsInput | string
    particularite?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    experience_totale?: IntFieldUpdateOperationsInput | number
    vaillance?: IntFieldUpdateOperationsInput | number
    sagesse?: IntFieldUpdateOperationsInput | number
    corps?: IntFieldUpdateOperationsInput | number
    corps_ameliore?: IntFieldUpdateOperationsInput | number
    coeur?: IntFieldUpdateOperationsInput | number
    coeur_ameliore?: IntFieldUpdateOperationsInput | number
    esprit?: IntFieldUpdateOperationsInput | number
    esprit_ameliore?: IntFieldUpdateOperationsInput | number
    presence?: IntFieldUpdateOperationsInput | number
    athletisme?: IntFieldUpdateOperationsInput | number
    vigilance?: IntFieldUpdateOperationsInput | number
    exploration?: IntFieldUpdateOperationsInput | number
    chant?: IntFieldUpdateOperationsInput | number
    artisanat?: IntFieldUpdateOperationsInput | number
    inspiration?: IntFieldUpdateOperationsInput | number
    voyage?: IntFieldUpdateOperationsInput | number
    intuition?: IntFieldUpdateOperationsInput | number
    guerison?: IntFieldUpdateOperationsInput | number
    courtoisie?: IntFieldUpdateOperationsInput | number
    art_de_la_guerre?: IntFieldUpdateOperationsInput | number
    persuasion?: IntFieldUpdateOperationsInput | number
    discretion?: IntFieldUpdateOperationsInput | number
    fouille?: IntFieldUpdateOperationsInput | number
    chasse?: IntFieldUpdateOperationsInput | number
    enigmes?: IntFieldUpdateOperationsInput | number
    connaissances?: IntFieldUpdateOperationsInput | number
    personnalite?: IntFieldUpdateOperationsInput | number
    deplacement?: IntFieldUpdateOperationsInput | number
    perception?: IntFieldUpdateOperationsInput | number
    survie?: IntFieldUpdateOperationsInput | number
    coutume?: IntFieldUpdateOperationsInput | number
    metier?: IntFieldUpdateOperationsInput | number
    bonus_degats?: StringFieldUpdateOperationsInput | string
    bonus_degats_distance?: StringFieldUpdateOperationsInput | string
    parade?: StringFieldUpdateOperationsInput | string
    bouclier?: StringFieldUpdateOperationsInput | string
    armure?: StringFieldUpdateOperationsInput | string
    casque?: StringFieldUpdateOperationsInput | string
    recompenses?: StringFieldUpdateOperationsInput | string
    vertus?: StringFieldUpdateOperationsInput | string
    endurance?: StringFieldUpdateOperationsInput | string
    endurance_depart?: StringFieldUpdateOperationsInput | string
    fatigue?: StringFieldUpdateOperationsInput | string
    espoir?: StringFieldUpdateOperationsInput | string
    espoir_depart?: StringFieldUpdateOperationsInput | string
    ombre?: StringFieldUpdateOperationsInput | string
    epuisement?: BoolFieldUpdateOperationsInput | boolean
    melancolie?: BoolFieldUpdateOperationsInput | boolean
    blesse?: BoolFieldUpdateOperationsInput | boolean
    communaute?: StringFieldUpdateOperationsInput | string
    points_progression?: StringFieldUpdateOperationsInput | string
    tresors?: StringFieldUpdateOperationsInput | string
    prestige?: StringFieldUpdateOperationsInput | string
    origine?: StringFieldUpdateOperationsInput | string
    guide?: StringFieldUpdateOperationsInput | string
    eclaireur?: StringFieldUpdateOperationsInput | string
    chasseur?: StringFieldUpdateOperationsInput | string
    guetteur?: StringFieldUpdateOperationsInput | string
    lien_communaute?: StringFieldUpdateOperationsInput | string
    sanctuaires?: StringFieldUpdateOperationsInput | string
    garant?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipements?: EquipmentUpdateManyWithoutUserNestedInput
    armes?: WeaponUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    culture?: StringFieldUpdateOperationsInput | string
    niveau_de_vie?: StringFieldUpdateOperationsInput | string
    avantage_culturel?: StringFieldUpdateOperationsInput | string
    vocation?: StringFieldUpdateOperationsInput | string
    part_ombre?: StringFieldUpdateOperationsInput | string
    specialites?: StringFieldUpdateOperationsInput | string
    particularite?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    experience_totale?: IntFieldUpdateOperationsInput | number
    vaillance?: IntFieldUpdateOperationsInput | number
    sagesse?: IntFieldUpdateOperationsInput | number
    corps?: IntFieldUpdateOperationsInput | number
    corps_ameliore?: IntFieldUpdateOperationsInput | number
    coeur?: IntFieldUpdateOperationsInput | number
    coeur_ameliore?: IntFieldUpdateOperationsInput | number
    esprit?: IntFieldUpdateOperationsInput | number
    esprit_ameliore?: IntFieldUpdateOperationsInput | number
    presence?: IntFieldUpdateOperationsInput | number
    athletisme?: IntFieldUpdateOperationsInput | number
    vigilance?: IntFieldUpdateOperationsInput | number
    exploration?: IntFieldUpdateOperationsInput | number
    chant?: IntFieldUpdateOperationsInput | number
    artisanat?: IntFieldUpdateOperationsInput | number
    inspiration?: IntFieldUpdateOperationsInput | number
    voyage?: IntFieldUpdateOperationsInput | number
    intuition?: IntFieldUpdateOperationsInput | number
    guerison?: IntFieldUpdateOperationsInput | number
    courtoisie?: IntFieldUpdateOperationsInput | number
    art_de_la_guerre?: IntFieldUpdateOperationsInput | number
    persuasion?: IntFieldUpdateOperationsInput | number
    discretion?: IntFieldUpdateOperationsInput | number
    fouille?: IntFieldUpdateOperationsInput | number
    chasse?: IntFieldUpdateOperationsInput | number
    enigmes?: IntFieldUpdateOperationsInput | number
    connaissances?: IntFieldUpdateOperationsInput | number
    personnalite?: IntFieldUpdateOperationsInput | number
    deplacement?: IntFieldUpdateOperationsInput | number
    perception?: IntFieldUpdateOperationsInput | number
    survie?: IntFieldUpdateOperationsInput | number
    coutume?: IntFieldUpdateOperationsInput | number
    metier?: IntFieldUpdateOperationsInput | number
    bonus_degats?: StringFieldUpdateOperationsInput | string
    bonus_degats_distance?: StringFieldUpdateOperationsInput | string
    parade?: StringFieldUpdateOperationsInput | string
    bouclier?: StringFieldUpdateOperationsInput | string
    armure?: StringFieldUpdateOperationsInput | string
    casque?: StringFieldUpdateOperationsInput | string
    recompenses?: StringFieldUpdateOperationsInput | string
    vertus?: StringFieldUpdateOperationsInput | string
    endurance?: StringFieldUpdateOperationsInput | string
    endurance_depart?: StringFieldUpdateOperationsInput | string
    fatigue?: StringFieldUpdateOperationsInput | string
    espoir?: StringFieldUpdateOperationsInput | string
    espoir_depart?: StringFieldUpdateOperationsInput | string
    ombre?: StringFieldUpdateOperationsInput | string
    epuisement?: BoolFieldUpdateOperationsInput | boolean
    melancolie?: BoolFieldUpdateOperationsInput | boolean
    blesse?: BoolFieldUpdateOperationsInput | boolean
    communaute?: StringFieldUpdateOperationsInput | string
    points_progression?: StringFieldUpdateOperationsInput | string
    tresors?: StringFieldUpdateOperationsInput | string
    prestige?: StringFieldUpdateOperationsInput | string
    origine?: StringFieldUpdateOperationsInput | string
    guide?: StringFieldUpdateOperationsInput | string
    eclaireur?: StringFieldUpdateOperationsInput | string
    chasseur?: StringFieldUpdateOperationsInput | string
    guetteur?: StringFieldUpdateOperationsInput | string
    lien_communaute?: StringFieldUpdateOperationsInput | string
    sanctuaires?: StringFieldUpdateOperationsInput | string
    garant?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipements?: EquipmentUncheckedUpdateManyWithoutUserNestedInput
    armes?: WeaponUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nom: string
    culture: string
    niveau_de_vie: string
    avantage_culturel: string
    vocation: string
    part_ombre: string
    specialites: string
    particularite: string
    experience: number
    experience_totale: number
    vaillance: number
    sagesse: number
    corps: number
    corps_ameliore: number
    coeur: number
    coeur_ameliore: number
    esprit: number
    esprit_ameliore: number
    presence: number
    athletisme: number
    vigilance: number
    exploration: number
    chant: number
    artisanat: number
    inspiration: number
    voyage: number
    intuition: number
    guerison: number
    courtoisie: number
    art_de_la_guerre: number
    persuasion: number
    discretion: number
    fouille: number
    chasse: number
    enigmes: number
    connaissances: number
    personnalite: number
    deplacement: number
    perception: number
    survie: number
    coutume: number
    metier: number
    bonus_degats?: string
    bonus_degats_distance?: string
    parade?: string
    bouclier?: string
    armure?: string
    casque?: string
    recompenses?: string
    vertus?: string
    endurance: string
    endurance_depart: string
    fatigue: string
    espoir: string
    espoir_depart: string
    ombre: string
    epuisement: boolean
    melancolie: boolean
    blesse: boolean
    communaute: string
    points_progression: string
    tresors: string
    prestige: string
    origine: string
    guide?: string
    eclaireur: string
    chasseur: string
    guetteur: string
    lien_communaute: string
    sanctuaires: string
    garant: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    culture?: StringFieldUpdateOperationsInput | string
    niveau_de_vie?: StringFieldUpdateOperationsInput | string
    avantage_culturel?: StringFieldUpdateOperationsInput | string
    vocation?: StringFieldUpdateOperationsInput | string
    part_ombre?: StringFieldUpdateOperationsInput | string
    specialites?: StringFieldUpdateOperationsInput | string
    particularite?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    experience_totale?: IntFieldUpdateOperationsInput | number
    vaillance?: IntFieldUpdateOperationsInput | number
    sagesse?: IntFieldUpdateOperationsInput | number
    corps?: IntFieldUpdateOperationsInput | number
    corps_ameliore?: IntFieldUpdateOperationsInput | number
    coeur?: IntFieldUpdateOperationsInput | number
    coeur_ameliore?: IntFieldUpdateOperationsInput | number
    esprit?: IntFieldUpdateOperationsInput | number
    esprit_ameliore?: IntFieldUpdateOperationsInput | number
    presence?: IntFieldUpdateOperationsInput | number
    athletisme?: IntFieldUpdateOperationsInput | number
    vigilance?: IntFieldUpdateOperationsInput | number
    exploration?: IntFieldUpdateOperationsInput | number
    chant?: IntFieldUpdateOperationsInput | number
    artisanat?: IntFieldUpdateOperationsInput | number
    inspiration?: IntFieldUpdateOperationsInput | number
    voyage?: IntFieldUpdateOperationsInput | number
    intuition?: IntFieldUpdateOperationsInput | number
    guerison?: IntFieldUpdateOperationsInput | number
    courtoisie?: IntFieldUpdateOperationsInput | number
    art_de_la_guerre?: IntFieldUpdateOperationsInput | number
    persuasion?: IntFieldUpdateOperationsInput | number
    discretion?: IntFieldUpdateOperationsInput | number
    fouille?: IntFieldUpdateOperationsInput | number
    chasse?: IntFieldUpdateOperationsInput | number
    enigmes?: IntFieldUpdateOperationsInput | number
    connaissances?: IntFieldUpdateOperationsInput | number
    personnalite?: IntFieldUpdateOperationsInput | number
    deplacement?: IntFieldUpdateOperationsInput | number
    perception?: IntFieldUpdateOperationsInput | number
    survie?: IntFieldUpdateOperationsInput | number
    coutume?: IntFieldUpdateOperationsInput | number
    metier?: IntFieldUpdateOperationsInput | number
    bonus_degats?: StringFieldUpdateOperationsInput | string
    bonus_degats_distance?: StringFieldUpdateOperationsInput | string
    parade?: StringFieldUpdateOperationsInput | string
    bouclier?: StringFieldUpdateOperationsInput | string
    armure?: StringFieldUpdateOperationsInput | string
    casque?: StringFieldUpdateOperationsInput | string
    recompenses?: StringFieldUpdateOperationsInput | string
    vertus?: StringFieldUpdateOperationsInput | string
    endurance?: StringFieldUpdateOperationsInput | string
    endurance_depart?: StringFieldUpdateOperationsInput | string
    fatigue?: StringFieldUpdateOperationsInput | string
    espoir?: StringFieldUpdateOperationsInput | string
    espoir_depart?: StringFieldUpdateOperationsInput | string
    ombre?: StringFieldUpdateOperationsInput | string
    epuisement?: BoolFieldUpdateOperationsInput | boolean
    melancolie?: BoolFieldUpdateOperationsInput | boolean
    blesse?: BoolFieldUpdateOperationsInput | boolean
    communaute?: StringFieldUpdateOperationsInput | string
    points_progression?: StringFieldUpdateOperationsInput | string
    tresors?: StringFieldUpdateOperationsInput | string
    prestige?: StringFieldUpdateOperationsInput | string
    origine?: StringFieldUpdateOperationsInput | string
    guide?: StringFieldUpdateOperationsInput | string
    eclaireur?: StringFieldUpdateOperationsInput | string
    chasseur?: StringFieldUpdateOperationsInput | string
    guetteur?: StringFieldUpdateOperationsInput | string
    lien_communaute?: StringFieldUpdateOperationsInput | string
    sanctuaires?: StringFieldUpdateOperationsInput | string
    garant?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    culture?: StringFieldUpdateOperationsInput | string
    niveau_de_vie?: StringFieldUpdateOperationsInput | string
    avantage_culturel?: StringFieldUpdateOperationsInput | string
    vocation?: StringFieldUpdateOperationsInput | string
    part_ombre?: StringFieldUpdateOperationsInput | string
    specialites?: StringFieldUpdateOperationsInput | string
    particularite?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    experience_totale?: IntFieldUpdateOperationsInput | number
    vaillance?: IntFieldUpdateOperationsInput | number
    sagesse?: IntFieldUpdateOperationsInput | number
    corps?: IntFieldUpdateOperationsInput | number
    corps_ameliore?: IntFieldUpdateOperationsInput | number
    coeur?: IntFieldUpdateOperationsInput | number
    coeur_ameliore?: IntFieldUpdateOperationsInput | number
    esprit?: IntFieldUpdateOperationsInput | number
    esprit_ameliore?: IntFieldUpdateOperationsInput | number
    presence?: IntFieldUpdateOperationsInput | number
    athletisme?: IntFieldUpdateOperationsInput | number
    vigilance?: IntFieldUpdateOperationsInput | number
    exploration?: IntFieldUpdateOperationsInput | number
    chant?: IntFieldUpdateOperationsInput | number
    artisanat?: IntFieldUpdateOperationsInput | number
    inspiration?: IntFieldUpdateOperationsInput | number
    voyage?: IntFieldUpdateOperationsInput | number
    intuition?: IntFieldUpdateOperationsInput | number
    guerison?: IntFieldUpdateOperationsInput | number
    courtoisie?: IntFieldUpdateOperationsInput | number
    art_de_la_guerre?: IntFieldUpdateOperationsInput | number
    persuasion?: IntFieldUpdateOperationsInput | number
    discretion?: IntFieldUpdateOperationsInput | number
    fouille?: IntFieldUpdateOperationsInput | number
    chasse?: IntFieldUpdateOperationsInput | number
    enigmes?: IntFieldUpdateOperationsInput | number
    connaissances?: IntFieldUpdateOperationsInput | number
    personnalite?: IntFieldUpdateOperationsInput | number
    deplacement?: IntFieldUpdateOperationsInput | number
    perception?: IntFieldUpdateOperationsInput | number
    survie?: IntFieldUpdateOperationsInput | number
    coutume?: IntFieldUpdateOperationsInput | number
    metier?: IntFieldUpdateOperationsInput | number
    bonus_degats?: StringFieldUpdateOperationsInput | string
    bonus_degats_distance?: StringFieldUpdateOperationsInput | string
    parade?: StringFieldUpdateOperationsInput | string
    bouclier?: StringFieldUpdateOperationsInput | string
    armure?: StringFieldUpdateOperationsInput | string
    casque?: StringFieldUpdateOperationsInput | string
    recompenses?: StringFieldUpdateOperationsInput | string
    vertus?: StringFieldUpdateOperationsInput | string
    endurance?: StringFieldUpdateOperationsInput | string
    endurance_depart?: StringFieldUpdateOperationsInput | string
    fatigue?: StringFieldUpdateOperationsInput | string
    espoir?: StringFieldUpdateOperationsInput | string
    espoir_depart?: StringFieldUpdateOperationsInput | string
    ombre?: StringFieldUpdateOperationsInput | string
    epuisement?: BoolFieldUpdateOperationsInput | boolean
    melancolie?: BoolFieldUpdateOperationsInput | boolean
    blesse?: BoolFieldUpdateOperationsInput | boolean
    communaute?: StringFieldUpdateOperationsInput | string
    points_progression?: StringFieldUpdateOperationsInput | string
    tresors?: StringFieldUpdateOperationsInput | string
    prestige?: StringFieldUpdateOperationsInput | string
    origine?: StringFieldUpdateOperationsInput | string
    guide?: StringFieldUpdateOperationsInput | string
    eclaireur?: StringFieldUpdateOperationsInput | string
    chasseur?: StringFieldUpdateOperationsInput | string
    guetteur?: StringFieldUpdateOperationsInput | string
    lien_communaute?: StringFieldUpdateOperationsInput | string
    sanctuaires?: StringFieldUpdateOperationsInput | string
    garant?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponCreateInput = {
    id?: string
    index: number
    niveau: number
    degats: string
    taille: string
    blessure: string
    enc: string
    nom?: string
    user: UserCreateNestedOneWithoutArmesInput
  }

  export type WeaponUncheckedCreateInput = {
    id?: string
    userId: string
    index: number
    niveau: number
    degats: string
    taille: string
    blessure: string
    enc: string
    nom?: string
  }

  export type WeaponUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    niveau?: IntFieldUpdateOperationsInput | number
    degats?: StringFieldUpdateOperationsInput | string
    taille?: StringFieldUpdateOperationsInput | string
    blessure?: StringFieldUpdateOperationsInput | string
    enc?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutArmesNestedInput
  }

  export type WeaponUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    niveau?: IntFieldUpdateOperationsInput | number
    degats?: StringFieldUpdateOperationsInput | string
    taille?: StringFieldUpdateOperationsInput | string
    blessure?: StringFieldUpdateOperationsInput | string
    enc?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type WeaponCreateManyInput = {
    id?: string
    userId: string
    index: number
    niveau: number
    degats: string
    taille: string
    blessure: string
    enc: string
    nom?: string
  }

  export type WeaponUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    niveau?: IntFieldUpdateOperationsInput | number
    degats?: StringFieldUpdateOperationsInput | string
    taille?: StringFieldUpdateOperationsInput | string
    blessure?: StringFieldUpdateOperationsInput | string
    enc?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type WeaponUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    niveau?: IntFieldUpdateOperationsInput | number
    degats?: StringFieldUpdateOperationsInput | string
    taille?: StringFieldUpdateOperationsInput | string
    blessure?: StringFieldUpdateOperationsInput | string
    enc?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentCreateInput = {
    id?: string
    index: number
    nom: string
    enc: string
    user: UserCreateNestedOneWithoutEquipementsInput
  }

  export type EquipmentUncheckedCreateInput = {
    id?: string
    userId: string
    index: number
    nom: string
    enc: string
  }

  export type EquipmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    enc?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutEquipementsNestedInput
  }

  export type EquipmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    enc?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentCreateManyInput = {
    id?: string
    userId: string
    index: number
    nom: string
    enc: string
  }

  export type EquipmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    enc?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    enc?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EquipmentListRelationFilter = {
    every?: EquipmentWhereInput
    some?: EquipmentWhereInput
    none?: EquipmentWhereInput
  }

  export type WeaponListRelationFilter = {
    every?: WeaponWhereInput
    some?: WeaponWhereInput
    none?: WeaponWhereInput
  }

  export type EquipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeaponOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    culture?: SortOrder
    niveau_de_vie?: SortOrder
    avantage_culturel?: SortOrder
    vocation?: SortOrder
    part_ombre?: SortOrder
    specialites?: SortOrder
    particularite?: SortOrder
    experience?: SortOrder
    experience_totale?: SortOrder
    vaillance?: SortOrder
    sagesse?: SortOrder
    corps?: SortOrder
    corps_ameliore?: SortOrder
    coeur?: SortOrder
    coeur_ameliore?: SortOrder
    esprit?: SortOrder
    esprit_ameliore?: SortOrder
    presence?: SortOrder
    athletisme?: SortOrder
    vigilance?: SortOrder
    exploration?: SortOrder
    chant?: SortOrder
    artisanat?: SortOrder
    inspiration?: SortOrder
    voyage?: SortOrder
    intuition?: SortOrder
    guerison?: SortOrder
    courtoisie?: SortOrder
    art_de_la_guerre?: SortOrder
    persuasion?: SortOrder
    discretion?: SortOrder
    fouille?: SortOrder
    chasse?: SortOrder
    enigmes?: SortOrder
    connaissances?: SortOrder
    personnalite?: SortOrder
    deplacement?: SortOrder
    perception?: SortOrder
    survie?: SortOrder
    coutume?: SortOrder
    metier?: SortOrder
    bonus_degats?: SortOrder
    bonus_degats_distance?: SortOrder
    parade?: SortOrder
    bouclier?: SortOrder
    armure?: SortOrder
    casque?: SortOrder
    recompenses?: SortOrder
    vertus?: SortOrder
    endurance?: SortOrder
    endurance_depart?: SortOrder
    fatigue?: SortOrder
    espoir?: SortOrder
    espoir_depart?: SortOrder
    ombre?: SortOrder
    epuisement?: SortOrder
    melancolie?: SortOrder
    blesse?: SortOrder
    communaute?: SortOrder
    points_progression?: SortOrder
    tresors?: SortOrder
    prestige?: SortOrder
    origine?: SortOrder
    guide?: SortOrder
    eclaireur?: SortOrder
    chasseur?: SortOrder
    guetteur?: SortOrder
    lien_communaute?: SortOrder
    sanctuaires?: SortOrder
    garant?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    experience?: SortOrder
    experience_totale?: SortOrder
    vaillance?: SortOrder
    sagesse?: SortOrder
    corps?: SortOrder
    corps_ameliore?: SortOrder
    coeur?: SortOrder
    coeur_ameliore?: SortOrder
    esprit?: SortOrder
    esprit_ameliore?: SortOrder
    presence?: SortOrder
    athletisme?: SortOrder
    vigilance?: SortOrder
    exploration?: SortOrder
    chant?: SortOrder
    artisanat?: SortOrder
    inspiration?: SortOrder
    voyage?: SortOrder
    intuition?: SortOrder
    guerison?: SortOrder
    courtoisie?: SortOrder
    art_de_la_guerre?: SortOrder
    persuasion?: SortOrder
    discretion?: SortOrder
    fouille?: SortOrder
    chasse?: SortOrder
    enigmes?: SortOrder
    connaissances?: SortOrder
    personnalite?: SortOrder
    deplacement?: SortOrder
    perception?: SortOrder
    survie?: SortOrder
    coutume?: SortOrder
    metier?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    culture?: SortOrder
    niveau_de_vie?: SortOrder
    avantage_culturel?: SortOrder
    vocation?: SortOrder
    part_ombre?: SortOrder
    specialites?: SortOrder
    particularite?: SortOrder
    experience?: SortOrder
    experience_totale?: SortOrder
    vaillance?: SortOrder
    sagesse?: SortOrder
    corps?: SortOrder
    corps_ameliore?: SortOrder
    coeur?: SortOrder
    coeur_ameliore?: SortOrder
    esprit?: SortOrder
    esprit_ameliore?: SortOrder
    presence?: SortOrder
    athletisme?: SortOrder
    vigilance?: SortOrder
    exploration?: SortOrder
    chant?: SortOrder
    artisanat?: SortOrder
    inspiration?: SortOrder
    voyage?: SortOrder
    intuition?: SortOrder
    guerison?: SortOrder
    courtoisie?: SortOrder
    art_de_la_guerre?: SortOrder
    persuasion?: SortOrder
    discretion?: SortOrder
    fouille?: SortOrder
    chasse?: SortOrder
    enigmes?: SortOrder
    connaissances?: SortOrder
    personnalite?: SortOrder
    deplacement?: SortOrder
    perception?: SortOrder
    survie?: SortOrder
    coutume?: SortOrder
    metier?: SortOrder
    bonus_degats?: SortOrder
    bonus_degats_distance?: SortOrder
    parade?: SortOrder
    bouclier?: SortOrder
    armure?: SortOrder
    casque?: SortOrder
    recompenses?: SortOrder
    vertus?: SortOrder
    endurance?: SortOrder
    endurance_depart?: SortOrder
    fatigue?: SortOrder
    espoir?: SortOrder
    espoir_depart?: SortOrder
    ombre?: SortOrder
    epuisement?: SortOrder
    melancolie?: SortOrder
    blesse?: SortOrder
    communaute?: SortOrder
    points_progression?: SortOrder
    tresors?: SortOrder
    prestige?: SortOrder
    origine?: SortOrder
    guide?: SortOrder
    eclaireur?: SortOrder
    chasseur?: SortOrder
    guetteur?: SortOrder
    lien_communaute?: SortOrder
    sanctuaires?: SortOrder
    garant?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    culture?: SortOrder
    niveau_de_vie?: SortOrder
    avantage_culturel?: SortOrder
    vocation?: SortOrder
    part_ombre?: SortOrder
    specialites?: SortOrder
    particularite?: SortOrder
    experience?: SortOrder
    experience_totale?: SortOrder
    vaillance?: SortOrder
    sagesse?: SortOrder
    corps?: SortOrder
    corps_ameliore?: SortOrder
    coeur?: SortOrder
    coeur_ameliore?: SortOrder
    esprit?: SortOrder
    esprit_ameliore?: SortOrder
    presence?: SortOrder
    athletisme?: SortOrder
    vigilance?: SortOrder
    exploration?: SortOrder
    chant?: SortOrder
    artisanat?: SortOrder
    inspiration?: SortOrder
    voyage?: SortOrder
    intuition?: SortOrder
    guerison?: SortOrder
    courtoisie?: SortOrder
    art_de_la_guerre?: SortOrder
    persuasion?: SortOrder
    discretion?: SortOrder
    fouille?: SortOrder
    chasse?: SortOrder
    enigmes?: SortOrder
    connaissances?: SortOrder
    personnalite?: SortOrder
    deplacement?: SortOrder
    perception?: SortOrder
    survie?: SortOrder
    coutume?: SortOrder
    metier?: SortOrder
    bonus_degats?: SortOrder
    bonus_degats_distance?: SortOrder
    parade?: SortOrder
    bouclier?: SortOrder
    armure?: SortOrder
    casque?: SortOrder
    recompenses?: SortOrder
    vertus?: SortOrder
    endurance?: SortOrder
    endurance_depart?: SortOrder
    fatigue?: SortOrder
    espoir?: SortOrder
    espoir_depart?: SortOrder
    ombre?: SortOrder
    epuisement?: SortOrder
    melancolie?: SortOrder
    blesse?: SortOrder
    communaute?: SortOrder
    points_progression?: SortOrder
    tresors?: SortOrder
    prestige?: SortOrder
    origine?: SortOrder
    guide?: SortOrder
    eclaireur?: SortOrder
    chasseur?: SortOrder
    guetteur?: SortOrder
    lien_communaute?: SortOrder
    sanctuaires?: SortOrder
    garant?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    experience?: SortOrder
    experience_totale?: SortOrder
    vaillance?: SortOrder
    sagesse?: SortOrder
    corps?: SortOrder
    corps_ameliore?: SortOrder
    coeur?: SortOrder
    coeur_ameliore?: SortOrder
    esprit?: SortOrder
    esprit_ameliore?: SortOrder
    presence?: SortOrder
    athletisme?: SortOrder
    vigilance?: SortOrder
    exploration?: SortOrder
    chant?: SortOrder
    artisanat?: SortOrder
    inspiration?: SortOrder
    voyage?: SortOrder
    intuition?: SortOrder
    guerison?: SortOrder
    courtoisie?: SortOrder
    art_de_la_guerre?: SortOrder
    persuasion?: SortOrder
    discretion?: SortOrder
    fouille?: SortOrder
    chasse?: SortOrder
    enigmes?: SortOrder
    connaissances?: SortOrder
    personnalite?: SortOrder
    deplacement?: SortOrder
    perception?: SortOrder
    survie?: SortOrder
    coutume?: SortOrder
    metier?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WeaponUserIdIndexCompoundUniqueInput = {
    userId: string
    index: number
  }

  export type WeaponCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    index?: SortOrder
    niveau?: SortOrder
    degats?: SortOrder
    taille?: SortOrder
    blessure?: SortOrder
    enc?: SortOrder
    nom?: SortOrder
  }

  export type WeaponAvgOrderByAggregateInput = {
    index?: SortOrder
    niveau?: SortOrder
  }

  export type WeaponMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    index?: SortOrder
    niveau?: SortOrder
    degats?: SortOrder
    taille?: SortOrder
    blessure?: SortOrder
    enc?: SortOrder
    nom?: SortOrder
  }

  export type WeaponMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    index?: SortOrder
    niveau?: SortOrder
    degats?: SortOrder
    taille?: SortOrder
    blessure?: SortOrder
    enc?: SortOrder
    nom?: SortOrder
  }

  export type WeaponSumOrderByAggregateInput = {
    index?: SortOrder
    niveau?: SortOrder
  }

  export type EquipmentUserIdIndexCompoundUniqueInput = {
    userId: string
    index: number
  }

  export type EquipmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    index?: SortOrder
    nom?: SortOrder
    enc?: SortOrder
  }

  export type EquipmentAvgOrderByAggregateInput = {
    index?: SortOrder
  }

  export type EquipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    index?: SortOrder
    nom?: SortOrder
    enc?: SortOrder
  }

  export type EquipmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    index?: SortOrder
    nom?: SortOrder
    enc?: SortOrder
  }

  export type EquipmentSumOrderByAggregateInput = {
    index?: SortOrder
  }

  export type EquipmentCreateNestedManyWithoutUserInput = {
    create?: XOR<EquipmentCreateWithoutUserInput, EquipmentUncheckedCreateWithoutUserInput> | EquipmentCreateWithoutUserInput[] | EquipmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutUserInput | EquipmentCreateOrConnectWithoutUserInput[]
    createMany?: EquipmentCreateManyUserInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type WeaponCreateNestedManyWithoutUserInput = {
    create?: XOR<WeaponCreateWithoutUserInput, WeaponUncheckedCreateWithoutUserInput> | WeaponCreateWithoutUserInput[] | WeaponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutUserInput | WeaponCreateOrConnectWithoutUserInput[]
    createMany?: WeaponCreateManyUserInputEnvelope
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
  }

  export type EquipmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EquipmentCreateWithoutUserInput, EquipmentUncheckedCreateWithoutUserInput> | EquipmentCreateWithoutUserInput[] | EquipmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutUserInput | EquipmentCreateOrConnectWithoutUserInput[]
    createMany?: EquipmentCreateManyUserInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type WeaponUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WeaponCreateWithoutUserInput, WeaponUncheckedCreateWithoutUserInput> | WeaponCreateWithoutUserInput[] | WeaponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutUserInput | WeaponCreateOrConnectWithoutUserInput[]
    createMany?: WeaponCreateManyUserInputEnvelope
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EquipmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<EquipmentCreateWithoutUserInput, EquipmentUncheckedCreateWithoutUserInput> | EquipmentCreateWithoutUserInput[] | EquipmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutUserInput | EquipmentCreateOrConnectWithoutUserInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutUserInput | EquipmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EquipmentCreateManyUserInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutUserInput | EquipmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutUserInput | EquipmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type WeaponUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeaponCreateWithoutUserInput, WeaponUncheckedCreateWithoutUserInput> | WeaponCreateWithoutUserInput[] | WeaponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutUserInput | WeaponCreateOrConnectWithoutUserInput[]
    upsert?: WeaponUpsertWithWhereUniqueWithoutUserInput | WeaponUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeaponCreateManyUserInputEnvelope
    set?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    disconnect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    delete?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    update?: WeaponUpdateWithWhereUniqueWithoutUserInput | WeaponUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeaponUpdateManyWithWhereWithoutUserInput | WeaponUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
  }

  export type EquipmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EquipmentCreateWithoutUserInput, EquipmentUncheckedCreateWithoutUserInput> | EquipmentCreateWithoutUserInput[] | EquipmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutUserInput | EquipmentCreateOrConnectWithoutUserInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutUserInput | EquipmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EquipmentCreateManyUserInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutUserInput | EquipmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutUserInput | EquipmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type WeaponUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeaponCreateWithoutUserInput, WeaponUncheckedCreateWithoutUserInput> | WeaponCreateWithoutUserInput[] | WeaponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutUserInput | WeaponCreateOrConnectWithoutUserInput[]
    upsert?: WeaponUpsertWithWhereUniqueWithoutUserInput | WeaponUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeaponCreateManyUserInputEnvelope
    set?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    disconnect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    delete?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    update?: WeaponUpdateWithWhereUniqueWithoutUserInput | WeaponUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeaponUpdateManyWithWhereWithoutUserInput | WeaponUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutArmesInput = {
    create?: XOR<UserCreateWithoutArmesInput, UserUncheckedCreateWithoutArmesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArmesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutArmesNestedInput = {
    create?: XOR<UserCreateWithoutArmesInput, UserUncheckedCreateWithoutArmesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArmesInput
    upsert?: UserUpsertWithoutArmesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArmesInput, UserUpdateWithoutArmesInput>, UserUncheckedUpdateWithoutArmesInput>
  }

  export type UserCreateNestedOneWithoutEquipementsInput = {
    create?: XOR<UserCreateWithoutEquipementsInput, UserUncheckedCreateWithoutEquipementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEquipementsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEquipementsNestedInput = {
    create?: XOR<UserCreateWithoutEquipementsInput, UserUncheckedCreateWithoutEquipementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEquipementsInput
    upsert?: UserUpsertWithoutEquipementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEquipementsInput, UserUpdateWithoutEquipementsInput>, UserUncheckedUpdateWithoutEquipementsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EquipmentCreateWithoutUserInput = {
    id?: string
    index: number
    nom: string
    enc: string
  }

  export type EquipmentUncheckedCreateWithoutUserInput = {
    id?: string
    index: number
    nom: string
    enc: string
  }

  export type EquipmentCreateOrConnectWithoutUserInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutUserInput, EquipmentUncheckedCreateWithoutUserInput>
  }

  export type EquipmentCreateManyUserInputEnvelope = {
    data: EquipmentCreateManyUserInput | EquipmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WeaponCreateWithoutUserInput = {
    id?: string
    index: number
    niveau: number
    degats: string
    taille: string
    blessure: string
    enc: string
    nom?: string
  }

  export type WeaponUncheckedCreateWithoutUserInput = {
    id?: string
    index: number
    niveau: number
    degats: string
    taille: string
    blessure: string
    enc: string
    nom?: string
  }

  export type WeaponCreateOrConnectWithoutUserInput = {
    where: WeaponWhereUniqueInput
    create: XOR<WeaponCreateWithoutUserInput, WeaponUncheckedCreateWithoutUserInput>
  }

  export type WeaponCreateManyUserInputEnvelope = {
    data: WeaponCreateManyUserInput | WeaponCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentUpsertWithWhereUniqueWithoutUserInput = {
    where: EquipmentWhereUniqueInput
    update: XOR<EquipmentUpdateWithoutUserInput, EquipmentUncheckedUpdateWithoutUserInput>
    create: XOR<EquipmentCreateWithoutUserInput, EquipmentUncheckedCreateWithoutUserInput>
  }

  export type EquipmentUpdateWithWhereUniqueWithoutUserInput = {
    where: EquipmentWhereUniqueInput
    data: XOR<EquipmentUpdateWithoutUserInput, EquipmentUncheckedUpdateWithoutUserInput>
  }

  export type EquipmentUpdateManyWithWhereWithoutUserInput = {
    where: EquipmentScalarWhereInput
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyWithoutUserInput>
  }

  export type EquipmentScalarWhereInput = {
    AND?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    OR?: EquipmentScalarWhereInput[]
    NOT?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    id?: StringFilter<"Equipment"> | string
    userId?: StringFilter<"Equipment"> | string
    index?: IntFilter<"Equipment"> | number
    nom?: StringFilter<"Equipment"> | string
    enc?: StringFilter<"Equipment"> | string
  }

  export type WeaponUpsertWithWhereUniqueWithoutUserInput = {
    where: WeaponWhereUniqueInput
    update: XOR<WeaponUpdateWithoutUserInput, WeaponUncheckedUpdateWithoutUserInput>
    create: XOR<WeaponCreateWithoutUserInput, WeaponUncheckedCreateWithoutUserInput>
  }

  export type WeaponUpdateWithWhereUniqueWithoutUserInput = {
    where: WeaponWhereUniqueInput
    data: XOR<WeaponUpdateWithoutUserInput, WeaponUncheckedUpdateWithoutUserInput>
  }

  export type WeaponUpdateManyWithWhereWithoutUserInput = {
    where: WeaponScalarWhereInput
    data: XOR<WeaponUpdateManyMutationInput, WeaponUncheckedUpdateManyWithoutUserInput>
  }

  export type WeaponScalarWhereInput = {
    AND?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
    OR?: WeaponScalarWhereInput[]
    NOT?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
    id?: StringFilter<"Weapon"> | string
    userId?: StringFilter<"Weapon"> | string
    index?: IntFilter<"Weapon"> | number
    niveau?: IntFilter<"Weapon"> | number
    degats?: StringFilter<"Weapon"> | string
    taille?: StringFilter<"Weapon"> | string
    blessure?: StringFilter<"Weapon"> | string
    enc?: StringFilter<"Weapon"> | string
    nom?: StringFilter<"Weapon"> | string
  }

  export type UserCreateWithoutArmesInput = {
    id?: string
    nom: string
    culture: string
    niveau_de_vie: string
    avantage_culturel: string
    vocation: string
    part_ombre: string
    specialites: string
    particularite: string
    experience: number
    experience_totale: number
    vaillance: number
    sagesse: number
    corps: number
    corps_ameliore: number
    coeur: number
    coeur_ameliore: number
    esprit: number
    esprit_ameliore: number
    presence: number
    athletisme: number
    vigilance: number
    exploration: number
    chant: number
    artisanat: number
    inspiration: number
    voyage: number
    intuition: number
    guerison: number
    courtoisie: number
    art_de_la_guerre: number
    persuasion: number
    discretion: number
    fouille: number
    chasse: number
    enigmes: number
    connaissances: number
    personnalite: number
    deplacement: number
    perception: number
    survie: number
    coutume: number
    metier: number
    bonus_degats?: string
    bonus_degats_distance?: string
    parade?: string
    bouclier?: string
    armure?: string
    casque?: string
    recompenses?: string
    vertus?: string
    endurance: string
    endurance_depart: string
    fatigue: string
    espoir: string
    espoir_depart: string
    ombre: string
    epuisement: boolean
    melancolie: boolean
    blesse: boolean
    communaute: string
    points_progression: string
    tresors: string
    prestige: string
    origine: string
    guide?: string
    eclaireur: string
    chasseur: string
    guetteur: string
    lien_communaute: string
    sanctuaires: string
    garant: string
    createdAt?: Date | string
    updatedAt?: Date | string
    equipements?: EquipmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArmesInput = {
    id?: string
    nom: string
    culture: string
    niveau_de_vie: string
    avantage_culturel: string
    vocation: string
    part_ombre: string
    specialites: string
    particularite: string
    experience: number
    experience_totale: number
    vaillance: number
    sagesse: number
    corps: number
    corps_ameliore: number
    coeur: number
    coeur_ameliore: number
    esprit: number
    esprit_ameliore: number
    presence: number
    athletisme: number
    vigilance: number
    exploration: number
    chant: number
    artisanat: number
    inspiration: number
    voyage: number
    intuition: number
    guerison: number
    courtoisie: number
    art_de_la_guerre: number
    persuasion: number
    discretion: number
    fouille: number
    chasse: number
    enigmes: number
    connaissances: number
    personnalite: number
    deplacement: number
    perception: number
    survie: number
    coutume: number
    metier: number
    bonus_degats?: string
    bonus_degats_distance?: string
    parade?: string
    bouclier?: string
    armure?: string
    casque?: string
    recompenses?: string
    vertus?: string
    endurance: string
    endurance_depart: string
    fatigue: string
    espoir: string
    espoir_depart: string
    ombre: string
    epuisement: boolean
    melancolie: boolean
    blesse: boolean
    communaute: string
    points_progression: string
    tresors: string
    prestige: string
    origine: string
    guide?: string
    eclaireur: string
    chasseur: string
    guetteur: string
    lien_communaute: string
    sanctuaires: string
    garant: string
    createdAt?: Date | string
    updatedAt?: Date | string
    equipements?: EquipmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArmesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArmesInput, UserUncheckedCreateWithoutArmesInput>
  }

  export type UserUpsertWithoutArmesInput = {
    update: XOR<UserUpdateWithoutArmesInput, UserUncheckedUpdateWithoutArmesInput>
    create: XOR<UserCreateWithoutArmesInput, UserUncheckedCreateWithoutArmesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArmesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArmesInput, UserUncheckedUpdateWithoutArmesInput>
  }

  export type UserUpdateWithoutArmesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    culture?: StringFieldUpdateOperationsInput | string
    niveau_de_vie?: StringFieldUpdateOperationsInput | string
    avantage_culturel?: StringFieldUpdateOperationsInput | string
    vocation?: StringFieldUpdateOperationsInput | string
    part_ombre?: StringFieldUpdateOperationsInput | string
    specialites?: StringFieldUpdateOperationsInput | string
    particularite?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    experience_totale?: IntFieldUpdateOperationsInput | number
    vaillance?: IntFieldUpdateOperationsInput | number
    sagesse?: IntFieldUpdateOperationsInput | number
    corps?: IntFieldUpdateOperationsInput | number
    corps_ameliore?: IntFieldUpdateOperationsInput | number
    coeur?: IntFieldUpdateOperationsInput | number
    coeur_ameliore?: IntFieldUpdateOperationsInput | number
    esprit?: IntFieldUpdateOperationsInput | number
    esprit_ameliore?: IntFieldUpdateOperationsInput | number
    presence?: IntFieldUpdateOperationsInput | number
    athletisme?: IntFieldUpdateOperationsInput | number
    vigilance?: IntFieldUpdateOperationsInput | number
    exploration?: IntFieldUpdateOperationsInput | number
    chant?: IntFieldUpdateOperationsInput | number
    artisanat?: IntFieldUpdateOperationsInput | number
    inspiration?: IntFieldUpdateOperationsInput | number
    voyage?: IntFieldUpdateOperationsInput | number
    intuition?: IntFieldUpdateOperationsInput | number
    guerison?: IntFieldUpdateOperationsInput | number
    courtoisie?: IntFieldUpdateOperationsInput | number
    art_de_la_guerre?: IntFieldUpdateOperationsInput | number
    persuasion?: IntFieldUpdateOperationsInput | number
    discretion?: IntFieldUpdateOperationsInput | number
    fouille?: IntFieldUpdateOperationsInput | number
    chasse?: IntFieldUpdateOperationsInput | number
    enigmes?: IntFieldUpdateOperationsInput | number
    connaissances?: IntFieldUpdateOperationsInput | number
    personnalite?: IntFieldUpdateOperationsInput | number
    deplacement?: IntFieldUpdateOperationsInput | number
    perception?: IntFieldUpdateOperationsInput | number
    survie?: IntFieldUpdateOperationsInput | number
    coutume?: IntFieldUpdateOperationsInput | number
    metier?: IntFieldUpdateOperationsInput | number
    bonus_degats?: StringFieldUpdateOperationsInput | string
    bonus_degats_distance?: StringFieldUpdateOperationsInput | string
    parade?: StringFieldUpdateOperationsInput | string
    bouclier?: StringFieldUpdateOperationsInput | string
    armure?: StringFieldUpdateOperationsInput | string
    casque?: StringFieldUpdateOperationsInput | string
    recompenses?: StringFieldUpdateOperationsInput | string
    vertus?: StringFieldUpdateOperationsInput | string
    endurance?: StringFieldUpdateOperationsInput | string
    endurance_depart?: StringFieldUpdateOperationsInput | string
    fatigue?: StringFieldUpdateOperationsInput | string
    espoir?: StringFieldUpdateOperationsInput | string
    espoir_depart?: StringFieldUpdateOperationsInput | string
    ombre?: StringFieldUpdateOperationsInput | string
    epuisement?: BoolFieldUpdateOperationsInput | boolean
    melancolie?: BoolFieldUpdateOperationsInput | boolean
    blesse?: BoolFieldUpdateOperationsInput | boolean
    communaute?: StringFieldUpdateOperationsInput | string
    points_progression?: StringFieldUpdateOperationsInput | string
    tresors?: StringFieldUpdateOperationsInput | string
    prestige?: StringFieldUpdateOperationsInput | string
    origine?: StringFieldUpdateOperationsInput | string
    guide?: StringFieldUpdateOperationsInput | string
    eclaireur?: StringFieldUpdateOperationsInput | string
    chasseur?: StringFieldUpdateOperationsInput | string
    guetteur?: StringFieldUpdateOperationsInput | string
    lien_communaute?: StringFieldUpdateOperationsInput | string
    sanctuaires?: StringFieldUpdateOperationsInput | string
    garant?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipements?: EquipmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArmesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    culture?: StringFieldUpdateOperationsInput | string
    niveau_de_vie?: StringFieldUpdateOperationsInput | string
    avantage_culturel?: StringFieldUpdateOperationsInput | string
    vocation?: StringFieldUpdateOperationsInput | string
    part_ombre?: StringFieldUpdateOperationsInput | string
    specialites?: StringFieldUpdateOperationsInput | string
    particularite?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    experience_totale?: IntFieldUpdateOperationsInput | number
    vaillance?: IntFieldUpdateOperationsInput | number
    sagesse?: IntFieldUpdateOperationsInput | number
    corps?: IntFieldUpdateOperationsInput | number
    corps_ameliore?: IntFieldUpdateOperationsInput | number
    coeur?: IntFieldUpdateOperationsInput | number
    coeur_ameliore?: IntFieldUpdateOperationsInput | number
    esprit?: IntFieldUpdateOperationsInput | number
    esprit_ameliore?: IntFieldUpdateOperationsInput | number
    presence?: IntFieldUpdateOperationsInput | number
    athletisme?: IntFieldUpdateOperationsInput | number
    vigilance?: IntFieldUpdateOperationsInput | number
    exploration?: IntFieldUpdateOperationsInput | number
    chant?: IntFieldUpdateOperationsInput | number
    artisanat?: IntFieldUpdateOperationsInput | number
    inspiration?: IntFieldUpdateOperationsInput | number
    voyage?: IntFieldUpdateOperationsInput | number
    intuition?: IntFieldUpdateOperationsInput | number
    guerison?: IntFieldUpdateOperationsInput | number
    courtoisie?: IntFieldUpdateOperationsInput | number
    art_de_la_guerre?: IntFieldUpdateOperationsInput | number
    persuasion?: IntFieldUpdateOperationsInput | number
    discretion?: IntFieldUpdateOperationsInput | number
    fouille?: IntFieldUpdateOperationsInput | number
    chasse?: IntFieldUpdateOperationsInput | number
    enigmes?: IntFieldUpdateOperationsInput | number
    connaissances?: IntFieldUpdateOperationsInput | number
    personnalite?: IntFieldUpdateOperationsInput | number
    deplacement?: IntFieldUpdateOperationsInput | number
    perception?: IntFieldUpdateOperationsInput | number
    survie?: IntFieldUpdateOperationsInput | number
    coutume?: IntFieldUpdateOperationsInput | number
    metier?: IntFieldUpdateOperationsInput | number
    bonus_degats?: StringFieldUpdateOperationsInput | string
    bonus_degats_distance?: StringFieldUpdateOperationsInput | string
    parade?: StringFieldUpdateOperationsInput | string
    bouclier?: StringFieldUpdateOperationsInput | string
    armure?: StringFieldUpdateOperationsInput | string
    casque?: StringFieldUpdateOperationsInput | string
    recompenses?: StringFieldUpdateOperationsInput | string
    vertus?: StringFieldUpdateOperationsInput | string
    endurance?: StringFieldUpdateOperationsInput | string
    endurance_depart?: StringFieldUpdateOperationsInput | string
    fatigue?: StringFieldUpdateOperationsInput | string
    espoir?: StringFieldUpdateOperationsInput | string
    espoir_depart?: StringFieldUpdateOperationsInput | string
    ombre?: StringFieldUpdateOperationsInput | string
    epuisement?: BoolFieldUpdateOperationsInput | boolean
    melancolie?: BoolFieldUpdateOperationsInput | boolean
    blesse?: BoolFieldUpdateOperationsInput | boolean
    communaute?: StringFieldUpdateOperationsInput | string
    points_progression?: StringFieldUpdateOperationsInput | string
    tresors?: StringFieldUpdateOperationsInput | string
    prestige?: StringFieldUpdateOperationsInput | string
    origine?: StringFieldUpdateOperationsInput | string
    guide?: StringFieldUpdateOperationsInput | string
    eclaireur?: StringFieldUpdateOperationsInput | string
    chasseur?: StringFieldUpdateOperationsInput | string
    guetteur?: StringFieldUpdateOperationsInput | string
    lien_communaute?: StringFieldUpdateOperationsInput | string
    sanctuaires?: StringFieldUpdateOperationsInput | string
    garant?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipements?: EquipmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEquipementsInput = {
    id?: string
    nom: string
    culture: string
    niveau_de_vie: string
    avantage_culturel: string
    vocation: string
    part_ombre: string
    specialites: string
    particularite: string
    experience: number
    experience_totale: number
    vaillance: number
    sagesse: number
    corps: number
    corps_ameliore: number
    coeur: number
    coeur_ameliore: number
    esprit: number
    esprit_ameliore: number
    presence: number
    athletisme: number
    vigilance: number
    exploration: number
    chant: number
    artisanat: number
    inspiration: number
    voyage: number
    intuition: number
    guerison: number
    courtoisie: number
    art_de_la_guerre: number
    persuasion: number
    discretion: number
    fouille: number
    chasse: number
    enigmes: number
    connaissances: number
    personnalite: number
    deplacement: number
    perception: number
    survie: number
    coutume: number
    metier: number
    bonus_degats?: string
    bonus_degats_distance?: string
    parade?: string
    bouclier?: string
    armure?: string
    casque?: string
    recompenses?: string
    vertus?: string
    endurance: string
    endurance_depart: string
    fatigue: string
    espoir: string
    espoir_depart: string
    ombre: string
    epuisement: boolean
    melancolie: boolean
    blesse: boolean
    communaute: string
    points_progression: string
    tresors: string
    prestige: string
    origine: string
    guide?: string
    eclaireur: string
    chasseur: string
    guetteur: string
    lien_communaute: string
    sanctuaires: string
    garant: string
    createdAt?: Date | string
    updatedAt?: Date | string
    armes?: WeaponCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEquipementsInput = {
    id?: string
    nom: string
    culture: string
    niveau_de_vie: string
    avantage_culturel: string
    vocation: string
    part_ombre: string
    specialites: string
    particularite: string
    experience: number
    experience_totale: number
    vaillance: number
    sagesse: number
    corps: number
    corps_ameliore: number
    coeur: number
    coeur_ameliore: number
    esprit: number
    esprit_ameliore: number
    presence: number
    athletisme: number
    vigilance: number
    exploration: number
    chant: number
    artisanat: number
    inspiration: number
    voyage: number
    intuition: number
    guerison: number
    courtoisie: number
    art_de_la_guerre: number
    persuasion: number
    discretion: number
    fouille: number
    chasse: number
    enigmes: number
    connaissances: number
    personnalite: number
    deplacement: number
    perception: number
    survie: number
    coutume: number
    metier: number
    bonus_degats?: string
    bonus_degats_distance?: string
    parade?: string
    bouclier?: string
    armure?: string
    casque?: string
    recompenses?: string
    vertus?: string
    endurance: string
    endurance_depart: string
    fatigue: string
    espoir: string
    espoir_depart: string
    ombre: string
    epuisement: boolean
    melancolie: boolean
    blesse: boolean
    communaute: string
    points_progression: string
    tresors: string
    prestige: string
    origine: string
    guide?: string
    eclaireur: string
    chasseur: string
    guetteur: string
    lien_communaute: string
    sanctuaires: string
    garant: string
    createdAt?: Date | string
    updatedAt?: Date | string
    armes?: WeaponUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEquipementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEquipementsInput, UserUncheckedCreateWithoutEquipementsInput>
  }

  export type UserUpsertWithoutEquipementsInput = {
    update: XOR<UserUpdateWithoutEquipementsInput, UserUncheckedUpdateWithoutEquipementsInput>
    create: XOR<UserCreateWithoutEquipementsInput, UserUncheckedCreateWithoutEquipementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEquipementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEquipementsInput, UserUncheckedUpdateWithoutEquipementsInput>
  }

  export type UserUpdateWithoutEquipementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    culture?: StringFieldUpdateOperationsInput | string
    niveau_de_vie?: StringFieldUpdateOperationsInput | string
    avantage_culturel?: StringFieldUpdateOperationsInput | string
    vocation?: StringFieldUpdateOperationsInput | string
    part_ombre?: StringFieldUpdateOperationsInput | string
    specialites?: StringFieldUpdateOperationsInput | string
    particularite?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    experience_totale?: IntFieldUpdateOperationsInput | number
    vaillance?: IntFieldUpdateOperationsInput | number
    sagesse?: IntFieldUpdateOperationsInput | number
    corps?: IntFieldUpdateOperationsInput | number
    corps_ameliore?: IntFieldUpdateOperationsInput | number
    coeur?: IntFieldUpdateOperationsInput | number
    coeur_ameliore?: IntFieldUpdateOperationsInput | number
    esprit?: IntFieldUpdateOperationsInput | number
    esprit_ameliore?: IntFieldUpdateOperationsInput | number
    presence?: IntFieldUpdateOperationsInput | number
    athletisme?: IntFieldUpdateOperationsInput | number
    vigilance?: IntFieldUpdateOperationsInput | number
    exploration?: IntFieldUpdateOperationsInput | number
    chant?: IntFieldUpdateOperationsInput | number
    artisanat?: IntFieldUpdateOperationsInput | number
    inspiration?: IntFieldUpdateOperationsInput | number
    voyage?: IntFieldUpdateOperationsInput | number
    intuition?: IntFieldUpdateOperationsInput | number
    guerison?: IntFieldUpdateOperationsInput | number
    courtoisie?: IntFieldUpdateOperationsInput | number
    art_de_la_guerre?: IntFieldUpdateOperationsInput | number
    persuasion?: IntFieldUpdateOperationsInput | number
    discretion?: IntFieldUpdateOperationsInput | number
    fouille?: IntFieldUpdateOperationsInput | number
    chasse?: IntFieldUpdateOperationsInput | number
    enigmes?: IntFieldUpdateOperationsInput | number
    connaissances?: IntFieldUpdateOperationsInput | number
    personnalite?: IntFieldUpdateOperationsInput | number
    deplacement?: IntFieldUpdateOperationsInput | number
    perception?: IntFieldUpdateOperationsInput | number
    survie?: IntFieldUpdateOperationsInput | number
    coutume?: IntFieldUpdateOperationsInput | number
    metier?: IntFieldUpdateOperationsInput | number
    bonus_degats?: StringFieldUpdateOperationsInput | string
    bonus_degats_distance?: StringFieldUpdateOperationsInput | string
    parade?: StringFieldUpdateOperationsInput | string
    bouclier?: StringFieldUpdateOperationsInput | string
    armure?: StringFieldUpdateOperationsInput | string
    casque?: StringFieldUpdateOperationsInput | string
    recompenses?: StringFieldUpdateOperationsInput | string
    vertus?: StringFieldUpdateOperationsInput | string
    endurance?: StringFieldUpdateOperationsInput | string
    endurance_depart?: StringFieldUpdateOperationsInput | string
    fatigue?: StringFieldUpdateOperationsInput | string
    espoir?: StringFieldUpdateOperationsInput | string
    espoir_depart?: StringFieldUpdateOperationsInput | string
    ombre?: StringFieldUpdateOperationsInput | string
    epuisement?: BoolFieldUpdateOperationsInput | boolean
    melancolie?: BoolFieldUpdateOperationsInput | boolean
    blesse?: BoolFieldUpdateOperationsInput | boolean
    communaute?: StringFieldUpdateOperationsInput | string
    points_progression?: StringFieldUpdateOperationsInput | string
    tresors?: StringFieldUpdateOperationsInput | string
    prestige?: StringFieldUpdateOperationsInput | string
    origine?: StringFieldUpdateOperationsInput | string
    guide?: StringFieldUpdateOperationsInput | string
    eclaireur?: StringFieldUpdateOperationsInput | string
    chasseur?: StringFieldUpdateOperationsInput | string
    guetteur?: StringFieldUpdateOperationsInput | string
    lien_communaute?: StringFieldUpdateOperationsInput | string
    sanctuaires?: StringFieldUpdateOperationsInput | string
    garant?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    armes?: WeaponUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEquipementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    culture?: StringFieldUpdateOperationsInput | string
    niveau_de_vie?: StringFieldUpdateOperationsInput | string
    avantage_culturel?: StringFieldUpdateOperationsInput | string
    vocation?: StringFieldUpdateOperationsInput | string
    part_ombre?: StringFieldUpdateOperationsInput | string
    specialites?: StringFieldUpdateOperationsInput | string
    particularite?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    experience_totale?: IntFieldUpdateOperationsInput | number
    vaillance?: IntFieldUpdateOperationsInput | number
    sagesse?: IntFieldUpdateOperationsInput | number
    corps?: IntFieldUpdateOperationsInput | number
    corps_ameliore?: IntFieldUpdateOperationsInput | number
    coeur?: IntFieldUpdateOperationsInput | number
    coeur_ameliore?: IntFieldUpdateOperationsInput | number
    esprit?: IntFieldUpdateOperationsInput | number
    esprit_ameliore?: IntFieldUpdateOperationsInput | number
    presence?: IntFieldUpdateOperationsInput | number
    athletisme?: IntFieldUpdateOperationsInput | number
    vigilance?: IntFieldUpdateOperationsInput | number
    exploration?: IntFieldUpdateOperationsInput | number
    chant?: IntFieldUpdateOperationsInput | number
    artisanat?: IntFieldUpdateOperationsInput | number
    inspiration?: IntFieldUpdateOperationsInput | number
    voyage?: IntFieldUpdateOperationsInput | number
    intuition?: IntFieldUpdateOperationsInput | number
    guerison?: IntFieldUpdateOperationsInput | number
    courtoisie?: IntFieldUpdateOperationsInput | number
    art_de_la_guerre?: IntFieldUpdateOperationsInput | number
    persuasion?: IntFieldUpdateOperationsInput | number
    discretion?: IntFieldUpdateOperationsInput | number
    fouille?: IntFieldUpdateOperationsInput | number
    chasse?: IntFieldUpdateOperationsInput | number
    enigmes?: IntFieldUpdateOperationsInput | number
    connaissances?: IntFieldUpdateOperationsInput | number
    personnalite?: IntFieldUpdateOperationsInput | number
    deplacement?: IntFieldUpdateOperationsInput | number
    perception?: IntFieldUpdateOperationsInput | number
    survie?: IntFieldUpdateOperationsInput | number
    coutume?: IntFieldUpdateOperationsInput | number
    metier?: IntFieldUpdateOperationsInput | number
    bonus_degats?: StringFieldUpdateOperationsInput | string
    bonus_degats_distance?: StringFieldUpdateOperationsInput | string
    parade?: StringFieldUpdateOperationsInput | string
    bouclier?: StringFieldUpdateOperationsInput | string
    armure?: StringFieldUpdateOperationsInput | string
    casque?: StringFieldUpdateOperationsInput | string
    recompenses?: StringFieldUpdateOperationsInput | string
    vertus?: StringFieldUpdateOperationsInput | string
    endurance?: StringFieldUpdateOperationsInput | string
    endurance_depart?: StringFieldUpdateOperationsInput | string
    fatigue?: StringFieldUpdateOperationsInput | string
    espoir?: StringFieldUpdateOperationsInput | string
    espoir_depart?: StringFieldUpdateOperationsInput | string
    ombre?: StringFieldUpdateOperationsInput | string
    epuisement?: BoolFieldUpdateOperationsInput | boolean
    melancolie?: BoolFieldUpdateOperationsInput | boolean
    blesse?: BoolFieldUpdateOperationsInput | boolean
    communaute?: StringFieldUpdateOperationsInput | string
    points_progression?: StringFieldUpdateOperationsInput | string
    tresors?: StringFieldUpdateOperationsInput | string
    prestige?: StringFieldUpdateOperationsInput | string
    origine?: StringFieldUpdateOperationsInput | string
    guide?: StringFieldUpdateOperationsInput | string
    eclaireur?: StringFieldUpdateOperationsInput | string
    chasseur?: StringFieldUpdateOperationsInput | string
    guetteur?: StringFieldUpdateOperationsInput | string
    lien_communaute?: StringFieldUpdateOperationsInput | string
    sanctuaires?: StringFieldUpdateOperationsInput | string
    garant?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    armes?: WeaponUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EquipmentCreateManyUserInput = {
    id?: string
    index: number
    nom: string
    enc: string
  }

  export type WeaponCreateManyUserInput = {
    id?: string
    index: number
    niveau: number
    degats: string
    taille: string
    blessure: string
    enc: string
    nom?: string
  }

  export type EquipmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    enc?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    enc?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    enc?: StringFieldUpdateOperationsInput | string
  }

  export type WeaponUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    niveau?: IntFieldUpdateOperationsInput | number
    degats?: StringFieldUpdateOperationsInput | string
    taille?: StringFieldUpdateOperationsInput | string
    blessure?: StringFieldUpdateOperationsInput | string
    enc?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type WeaponUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    niveau?: IntFieldUpdateOperationsInput | number
    degats?: StringFieldUpdateOperationsInput | string
    taille?: StringFieldUpdateOperationsInput | string
    blessure?: StringFieldUpdateOperationsInput | string
    enc?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type WeaponUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    niveau?: IntFieldUpdateOperationsInput | number
    degats?: StringFieldUpdateOperationsInput | string
    taille?: StringFieldUpdateOperationsInput | string
    blessure?: StringFieldUpdateOperationsInput | string
    enc?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}