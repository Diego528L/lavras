
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
 * Model funcionario
 * 
 */
export type funcionario = $Result.DefaultSelection<Prisma.$funcionarioPayload>
/**
 * Model cliente
 * 
 */
export type cliente = $Result.DefaultSelection<Prisma.$clientePayload>
/**
 * Model pontoTuristico
 * 
 */
export type pontoTuristico = $Result.DefaultSelection<Prisma.$pontoTuristicoPayload>
/**
 * Model eventos
 * 
 */
export type eventos = $Result.DefaultSelection<Prisma.$eventosPayload>
/**
 * Model gastronomia
 * 
 */
export type gastronomia = $Result.DefaultSelection<Prisma.$gastronomiaPayload>
/**
 * Model hospedagem
 * 
 */
export type hospedagem = $Result.DefaultSelection<Prisma.$hospedagemPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Funcionarios
 * const funcionarios = await prisma.funcionario.findMany()
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
   * // Fetch zero or more Funcionarios
   * const funcionarios = await prisma.funcionario.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.funcionario`: Exposes CRUD operations for the **funcionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionario.findMany()
    * ```
    */
  get funcionario(): Prisma.funcionarioDelegate<ExtArgs>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.clienteDelegate<ExtArgs>;

  /**
   * `prisma.pontoTuristico`: Exposes CRUD operations for the **pontoTuristico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PontoTuristicos
    * const pontoTuristicos = await prisma.pontoTuristico.findMany()
    * ```
    */
  get pontoTuristico(): Prisma.pontoTuristicoDelegate<ExtArgs>;

  /**
   * `prisma.eventos`: Exposes CRUD operations for the **eventos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.eventos.findMany()
    * ```
    */
  get eventos(): Prisma.eventosDelegate<ExtArgs>;

  /**
   * `prisma.gastronomia`: Exposes CRUD operations for the **gastronomia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gastronomias
    * const gastronomias = await prisma.gastronomia.findMany()
    * ```
    */
  get gastronomia(): Prisma.gastronomiaDelegate<ExtArgs>;

  /**
   * `prisma.hospedagem`: Exposes CRUD operations for the **hospedagem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hospedagems
    * const hospedagems = await prisma.hospedagem.findMany()
    * ```
    */
  get hospedagem(): Prisma.hospedagemDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    funcionario: 'funcionario',
    cliente: 'cliente',
    pontoTuristico: 'pontoTuristico',
    eventos: 'eventos',
    gastronomia: 'gastronomia',
    hospedagem: 'hospedagem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "funcionario" | "cliente" | "pontoTuristico" | "eventos" | "gastronomia" | "hospedagem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      funcionario: {
        payload: Prisma.$funcionarioPayload<ExtArgs>
        fields: Prisma.funcionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.funcionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.funcionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          findFirst: {
            args: Prisma.funcionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.funcionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          findMany: {
            args: Prisma.funcionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>[]
          }
          create: {
            args: Prisma.funcionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          createMany: {
            args: Prisma.funcionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.funcionarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>[]
          }
          delete: {
            args: Prisma.funcionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          update: {
            args: Prisma.funcionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          deleteMany: {
            args: Prisma.funcionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.funcionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.funcionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          aggregate: {
            args: Prisma.FuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionario>
          }
          groupBy: {
            args: Prisma.funcionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.funcionarioCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioCountAggregateOutputType> | number
          }
        }
      }
      cliente: {
        payload: Prisma.$clientePayload<ExtArgs>
        fields: Prisma.clienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findFirst: {
            args: Prisma.clienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findMany: {
            args: Prisma.clienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          create: {
            args: Prisma.clienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          createMany: {
            args: Prisma.clienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          delete: {
            args: Prisma.clienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          update: {
            args: Prisma.clienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          deleteMany: {
            args: Prisma.clienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.clienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.clienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      pontoTuristico: {
        payload: Prisma.$pontoTuristicoPayload<ExtArgs>
        fields: Prisma.pontoTuristicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pontoTuristicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pontoTuristicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pontoTuristicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pontoTuristicoPayload>
          }
          findFirst: {
            args: Prisma.pontoTuristicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pontoTuristicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pontoTuristicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pontoTuristicoPayload>
          }
          findMany: {
            args: Prisma.pontoTuristicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pontoTuristicoPayload>[]
          }
          create: {
            args: Prisma.pontoTuristicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pontoTuristicoPayload>
          }
          createMany: {
            args: Prisma.pontoTuristicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pontoTuristicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pontoTuristicoPayload>[]
          }
          delete: {
            args: Prisma.pontoTuristicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pontoTuristicoPayload>
          }
          update: {
            args: Prisma.pontoTuristicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pontoTuristicoPayload>
          }
          deleteMany: {
            args: Prisma.pontoTuristicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pontoTuristicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pontoTuristicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pontoTuristicoPayload>
          }
          aggregate: {
            args: Prisma.PontoTuristicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePontoTuristico>
          }
          groupBy: {
            args: Prisma.pontoTuristicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PontoTuristicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pontoTuristicoCountArgs<ExtArgs>
            result: $Utils.Optional<PontoTuristicoCountAggregateOutputType> | number
          }
        }
      }
      eventos: {
        payload: Prisma.$eventosPayload<ExtArgs>
        fields: Prisma.eventosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          findFirst: {
            args: Prisma.eventosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          findMany: {
            args: Prisma.eventosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>[]
          }
          create: {
            args: Prisma.eventosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          createMany: {
            args: Prisma.eventosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eventosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>[]
          }
          delete: {
            args: Prisma.eventosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          update: {
            args: Prisma.eventosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          deleteMany: {
            args: Prisma.eventosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.eventosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          aggregate: {
            args: Prisma.EventosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventos>
          }
          groupBy: {
            args: Prisma.eventosGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventosGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventosCountArgs<ExtArgs>
            result: $Utils.Optional<EventosCountAggregateOutputType> | number
          }
        }
      }
      gastronomia: {
        payload: Prisma.$gastronomiaPayload<ExtArgs>
        fields: Prisma.gastronomiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gastronomiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastronomiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gastronomiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastronomiaPayload>
          }
          findFirst: {
            args: Prisma.gastronomiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastronomiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gastronomiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastronomiaPayload>
          }
          findMany: {
            args: Prisma.gastronomiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastronomiaPayload>[]
          }
          create: {
            args: Prisma.gastronomiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastronomiaPayload>
          }
          createMany: {
            args: Prisma.gastronomiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gastronomiaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastronomiaPayload>[]
          }
          delete: {
            args: Prisma.gastronomiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastronomiaPayload>
          }
          update: {
            args: Prisma.gastronomiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastronomiaPayload>
          }
          deleteMany: {
            args: Prisma.gastronomiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gastronomiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.gastronomiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastronomiaPayload>
          }
          aggregate: {
            args: Prisma.GastronomiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGastronomia>
          }
          groupBy: {
            args: Prisma.gastronomiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<GastronomiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.gastronomiaCountArgs<ExtArgs>
            result: $Utils.Optional<GastronomiaCountAggregateOutputType> | number
          }
        }
      }
      hospedagem: {
        payload: Prisma.$hospedagemPayload<ExtArgs>
        fields: Prisma.hospedagemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hospedagemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospedagemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hospedagemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospedagemPayload>
          }
          findFirst: {
            args: Prisma.hospedagemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospedagemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hospedagemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospedagemPayload>
          }
          findMany: {
            args: Prisma.hospedagemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospedagemPayload>[]
          }
          create: {
            args: Prisma.hospedagemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospedagemPayload>
          }
          createMany: {
            args: Prisma.hospedagemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hospedagemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospedagemPayload>[]
          }
          delete: {
            args: Prisma.hospedagemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospedagemPayload>
          }
          update: {
            args: Prisma.hospedagemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospedagemPayload>
          }
          deleteMany: {
            args: Prisma.hospedagemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hospedagemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.hospedagemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospedagemPayload>
          }
          aggregate: {
            args: Prisma.HospedagemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHospedagem>
          }
          groupBy: {
            args: Prisma.hospedagemGroupByArgs<ExtArgs>
            result: $Utils.Optional<HospedagemGroupByOutputType>[]
          }
          count: {
            args: Prisma.hospedagemCountArgs<ExtArgs>
            result: $Utils.Optional<HospedagemCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model funcionario
   */

  export type AggregateFuncionario = {
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  export type FuncionarioAvgAggregateOutputType = {
    id: number | null
  }

  export type FuncionarioSumAggregateOutputType = {
    id: number | null
  }

  export type FuncionarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    password: string | null
  }

  export type FuncionarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    password: string | null
  }

  export type FuncionarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    password: number
    _all: number
  }


  export type FuncionarioAvgAggregateInputType = {
    id?: true
  }

  export type FuncionarioSumAggregateInputType = {
    id?: true
  }

  export type FuncionarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    password?: true
  }

  export type FuncionarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    password?: true
  }

  export type FuncionarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    password?: true
    _all?: true
  }

  export type FuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which funcionario to aggregate.
     */
    where?: funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned funcionarios
    **/
    _count?: true | FuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuncionarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuncionarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionarioMaxAggregateInputType
  }

  export type GetFuncionarioAggregateType<T extends FuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionario[P]>
      : GetScalarType<T[P], AggregateFuncionario[P]>
  }




  export type funcionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: funcionarioWhereInput
    orderBy?: funcionarioOrderByWithAggregationInput | funcionarioOrderByWithAggregationInput[]
    by: FuncionarioScalarFieldEnum[] | FuncionarioScalarFieldEnum
    having?: funcionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionarioCountAggregateInputType | true
    _avg?: FuncionarioAvgAggregateInputType
    _sum?: FuncionarioSumAggregateInputType
    _min?: FuncionarioMinAggregateInputType
    _max?: FuncionarioMaxAggregateInputType
  }

  export type FuncionarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    telefone: string
    password: string
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  type GetFuncionarioGroupByPayload<T extends funcionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type funcionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    password?: boolean
  }, ExtArgs["result"]["funcionario"]>

  export type funcionarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    password?: boolean
  }, ExtArgs["result"]["funcionario"]>

  export type funcionarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    password?: boolean
  }


  export type $funcionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "funcionario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      telefone: string
      password: string
    }, ExtArgs["result"]["funcionario"]>
    composites: {}
  }

  type funcionarioGetPayload<S extends boolean | null | undefined | funcionarioDefaultArgs> = $Result.GetResult<Prisma.$funcionarioPayload, S>

  type funcionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<funcionarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FuncionarioCountAggregateInputType | true
    }

  export interface funcionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['funcionario'], meta: { name: 'funcionario' } }
    /**
     * Find zero or one Funcionario that matches the filter.
     * @param {funcionarioFindUniqueArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends funcionarioFindUniqueArgs>(args: SelectSubset<T, funcionarioFindUniqueArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Funcionario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {funcionarioFindUniqueOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends funcionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, funcionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Funcionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioFindFirstArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends funcionarioFindFirstArgs>(args?: SelectSubset<T, funcionarioFindFirstArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Funcionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioFindFirstOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends funcionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, funcionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionario.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends funcionarioFindManyArgs>(args?: SelectSubset<T, funcionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Funcionario.
     * @param {funcionarioCreateArgs} args - Arguments to create a Funcionario.
     * @example
     * // Create one Funcionario
     * const Funcionario = await prisma.funcionario.create({
     *   data: {
     *     // ... data to create a Funcionario
     *   }
     * })
     * 
     */
    create<T extends funcionarioCreateArgs>(args: SelectSubset<T, funcionarioCreateArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Funcionarios.
     * @param {funcionarioCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends funcionarioCreateManyArgs>(args?: SelectSubset<T, funcionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Funcionarios and returns the data saved in the database.
     * @param {funcionarioCreateManyAndReturnArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Funcionarios and only return the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends funcionarioCreateManyAndReturnArgs>(args?: SelectSubset<T, funcionarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Funcionario.
     * @param {funcionarioDeleteArgs} args - Arguments to delete one Funcionario.
     * @example
     * // Delete one Funcionario
     * const Funcionario = await prisma.funcionario.delete({
     *   where: {
     *     // ... filter to delete one Funcionario
     *   }
     * })
     * 
     */
    delete<T extends funcionarioDeleteArgs>(args: SelectSubset<T, funcionarioDeleteArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Funcionario.
     * @param {funcionarioUpdateArgs} args - Arguments to update one Funcionario.
     * @example
     * // Update one Funcionario
     * const funcionario = await prisma.funcionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends funcionarioUpdateArgs>(args: SelectSubset<T, funcionarioUpdateArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Funcionarios.
     * @param {funcionarioDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends funcionarioDeleteManyArgs>(args?: SelectSubset<T, funcionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends funcionarioUpdateManyArgs>(args: SelectSubset<T, funcionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Funcionario.
     * @param {funcionarioUpsertArgs} args - Arguments to update or create a Funcionario.
     * @example
     * // Update or create a Funcionario
     * const funcionario = await prisma.funcionario.upsert({
     *   create: {
     *     // ... data to create a Funcionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionario we want to update
     *   }
     * })
     */
    upsert<T extends funcionarioUpsertArgs>(args: SelectSubset<T, funcionarioUpsertArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionario.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends funcionarioCountArgs>(
      args?: Subset<T, funcionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuncionarioAggregateArgs>(args: Subset<T, FuncionarioAggregateArgs>): Prisma.PrismaPromise<GetFuncionarioAggregateType<T>>

    /**
     * Group by Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioGroupByArgs} args - Group by arguments.
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
      T extends funcionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: funcionarioGroupByArgs['orderBy'] }
        : { orderBy?: funcionarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, funcionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the funcionario model
   */
  readonly fields: funcionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for funcionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__funcionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the funcionario model
   */ 
  interface funcionarioFieldRefs {
    readonly id: FieldRef<"funcionario", 'Int'>
    readonly nome: FieldRef<"funcionario", 'String'>
    readonly email: FieldRef<"funcionario", 'String'>
    readonly telefone: FieldRef<"funcionario", 'String'>
    readonly password: FieldRef<"funcionario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * funcionario findUnique
   */
  export type funcionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Filter, which funcionario to fetch.
     */
    where: funcionarioWhereUniqueInput
  }

  /**
   * funcionario findUniqueOrThrow
   */
  export type funcionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Filter, which funcionario to fetch.
     */
    where: funcionarioWhereUniqueInput
  }

  /**
   * funcionario findFirst
   */
  export type funcionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Filter, which funcionario to fetch.
     */
    where?: funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for funcionarios.
     */
    cursor?: funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * funcionario findFirstOrThrow
   */
  export type funcionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Filter, which funcionario to fetch.
     */
    where?: funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for funcionarios.
     */
    cursor?: funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * funcionario findMany
   */
  export type funcionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Filter, which funcionarios to fetch.
     */
    where?: funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing funcionarios.
     */
    cursor?: funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * funcionario create
   */
  export type funcionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * The data needed to create a funcionario.
     */
    data: XOR<funcionarioCreateInput, funcionarioUncheckedCreateInput>
  }

  /**
   * funcionario createMany
   */
  export type funcionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many funcionarios.
     */
    data: funcionarioCreateManyInput | funcionarioCreateManyInput[]
  }

  /**
   * funcionario createManyAndReturn
   */
  export type funcionarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many funcionarios.
     */
    data: funcionarioCreateManyInput | funcionarioCreateManyInput[]
  }

  /**
   * funcionario update
   */
  export type funcionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * The data needed to update a funcionario.
     */
    data: XOR<funcionarioUpdateInput, funcionarioUncheckedUpdateInput>
    /**
     * Choose, which funcionario to update.
     */
    where: funcionarioWhereUniqueInput
  }

  /**
   * funcionario updateMany
   */
  export type funcionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update funcionarios.
     */
    data: XOR<funcionarioUpdateManyMutationInput, funcionarioUncheckedUpdateManyInput>
    /**
     * Filter which funcionarios to update
     */
    where?: funcionarioWhereInput
  }

  /**
   * funcionario upsert
   */
  export type funcionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * The filter to search for the funcionario to update in case it exists.
     */
    where: funcionarioWhereUniqueInput
    /**
     * In case the funcionario found by the `where` argument doesn't exist, create a new funcionario with this data.
     */
    create: XOR<funcionarioCreateInput, funcionarioUncheckedCreateInput>
    /**
     * In case the funcionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<funcionarioUpdateInput, funcionarioUncheckedUpdateInput>
  }

  /**
   * funcionario delete
   */
  export type funcionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Filter which funcionario to delete.
     */
    where: funcionarioWhereUniqueInput
  }

  /**
   * funcionario deleteMany
   */
  export type funcionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which funcionarios to delete
     */
    where?: funcionarioWhereInput
  }

  /**
   * funcionario without action
   */
  export type funcionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
  }


  /**
   * Model cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    comentario: string | null
    foto: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    comentario: string | null
    foto: string | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    comentario: number
    foto: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    comentario?: true
    foto?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    comentario?: true
    foto?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    comentario?: true
    foto?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cliente to aggregate.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type clienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clienteWhereInput
    orderBy?: clienteOrderByWithAggregationInput | clienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: clienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nome: string
    comentario: string
    foto: string
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends clienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type clienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    comentario?: boolean
    foto?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    comentario?: boolean
    foto?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectScalar = {
    id?: boolean
    nome?: boolean
    comentario?: boolean
    foto?: boolean
  }


  export type $clientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cliente"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      comentario: string
      foto: string
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type clienteGetPayload<S extends boolean | null | undefined | clienteDefaultArgs> = $Result.GetResult<Prisma.$clientePayload, S>

  type clienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<clienteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface clienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cliente'], meta: { name: 'cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {clienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clienteFindUniqueArgs>(args: SelectSubset<T, clienteFindUniqueArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {clienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clienteFindUniqueOrThrowArgs>(args: SelectSubset<T, clienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clienteFindFirstArgs>(args?: SelectSubset<T, clienteFindFirstArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clienteFindFirstOrThrowArgs>(args?: SelectSubset<T, clienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clienteFindManyArgs>(args?: SelectSubset<T, clienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cliente.
     * @param {clienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends clienteCreateArgs>(args: SelectSubset<T, clienteCreateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clientes.
     * @param {clienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clienteCreateManyArgs>(args?: SelectSubset<T, clienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {clienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clienteCreateManyAndReturnArgs>(args?: SelectSubset<T, clienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Cliente.
     * @param {clienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends clienteDeleteArgs>(args: SelectSubset<T, clienteDeleteArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cliente.
     * @param {clienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clienteUpdateArgs>(args: SelectSubset<T, clienteUpdateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clientes.
     * @param {clienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clienteDeleteManyArgs>(args?: SelectSubset<T, clienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clienteUpdateManyArgs>(args: SelectSubset<T, clienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {clienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends clienteUpsertArgs>(args: SelectSubset<T, clienteUpsertArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clienteCountArgs>(
      args?: Subset<T, clienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteGroupByArgs} args - Group by arguments.
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
      T extends clienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clienteGroupByArgs['orderBy'] }
        : { orderBy?: clienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cliente model
   */
  readonly fields: clienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the cliente model
   */ 
  interface clienteFieldRefs {
    readonly id: FieldRef<"cliente", 'Int'>
    readonly nome: FieldRef<"cliente", 'String'>
    readonly comentario: FieldRef<"cliente", 'String'>
    readonly foto: FieldRef<"cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cliente findUnique
   */
  export type clienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findUniqueOrThrow
   */
  export type clienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findFirst
   */
  export type clienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findFirstOrThrow
   */
  export type clienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findMany
   */
  export type clienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente create
   */
  export type clienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * The data needed to create a cliente.
     */
    data: XOR<clienteCreateInput, clienteUncheckedCreateInput>
  }

  /**
   * cliente createMany
   */
  export type clienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: clienteCreateManyInput | clienteCreateManyInput[]
  }

  /**
   * cliente createManyAndReturn
   */
  export type clienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many clientes.
     */
    data: clienteCreateManyInput | clienteCreateManyInput[]
  }

  /**
   * cliente update
   */
  export type clienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * The data needed to update a cliente.
     */
    data: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
    /**
     * Choose, which cliente to update.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente updateMany
   */
  export type clienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clienteUpdateManyMutationInput, clienteUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clienteWhereInput
  }

  /**
   * cliente upsert
   */
  export type clienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * The filter to search for the cliente to update in case it exists.
     */
    where: clienteWhereUniqueInput
    /**
     * In case the cliente found by the `where` argument doesn't exist, create a new cliente with this data.
     */
    create: XOR<clienteCreateInput, clienteUncheckedCreateInput>
    /**
     * In case the cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
  }

  /**
   * cliente delete
   */
  export type clienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Filter which cliente to delete.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente deleteMany
   */
  export type clienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: clienteWhereInput
  }

  /**
   * cliente without action
   */
  export type clienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
  }


  /**
   * Model pontoTuristico
   */

  export type AggregatePontoTuristico = {
    _count: PontoTuristicoCountAggregateOutputType | null
    _avg: PontoTuristicoAvgAggregateOutputType | null
    _sum: PontoTuristicoSumAggregateOutputType | null
    _min: PontoTuristicoMinAggregateOutputType | null
    _max: PontoTuristicoMaxAggregateOutputType | null
  }

  export type PontoTuristicoAvgAggregateOutputType = {
    id: number | null
  }

  export type PontoTuristicoSumAggregateOutputType = {
    id: number | null
  }

  export type PontoTuristicoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    categoria: string | null
    descricao: string | null
    endereco: string | null
    foto: string | null
  }

  export type PontoTuristicoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    categoria: string | null
    descricao: string | null
    endereco: string | null
    foto: string | null
  }

  export type PontoTuristicoCountAggregateOutputType = {
    id: number
    nome: number
    categoria: number
    descricao: number
    endereco: number
    foto: number
    _all: number
  }


  export type PontoTuristicoAvgAggregateInputType = {
    id?: true
  }

  export type PontoTuristicoSumAggregateInputType = {
    id?: true
  }

  export type PontoTuristicoMinAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    descricao?: true
    endereco?: true
    foto?: true
  }

  export type PontoTuristicoMaxAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    descricao?: true
    endereco?: true
    foto?: true
  }

  export type PontoTuristicoCountAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    descricao?: true
    endereco?: true
    foto?: true
    _all?: true
  }

  export type PontoTuristicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pontoTuristico to aggregate.
     */
    where?: pontoTuristicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pontoTuristicos to fetch.
     */
    orderBy?: pontoTuristicoOrderByWithRelationInput | pontoTuristicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pontoTuristicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pontoTuristicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pontoTuristicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pontoTuristicos
    **/
    _count?: true | PontoTuristicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PontoTuristicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PontoTuristicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PontoTuristicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PontoTuristicoMaxAggregateInputType
  }

  export type GetPontoTuristicoAggregateType<T extends PontoTuristicoAggregateArgs> = {
        [P in keyof T & keyof AggregatePontoTuristico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePontoTuristico[P]>
      : GetScalarType<T[P], AggregatePontoTuristico[P]>
  }




  export type pontoTuristicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pontoTuristicoWhereInput
    orderBy?: pontoTuristicoOrderByWithAggregationInput | pontoTuristicoOrderByWithAggregationInput[]
    by: PontoTuristicoScalarFieldEnum[] | PontoTuristicoScalarFieldEnum
    having?: pontoTuristicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PontoTuristicoCountAggregateInputType | true
    _avg?: PontoTuristicoAvgAggregateInputType
    _sum?: PontoTuristicoSumAggregateInputType
    _min?: PontoTuristicoMinAggregateInputType
    _max?: PontoTuristicoMaxAggregateInputType
  }

  export type PontoTuristicoGroupByOutputType = {
    id: number
    nome: string
    categoria: string
    descricao: string
    endereco: string
    foto: string
    _count: PontoTuristicoCountAggregateOutputType | null
    _avg: PontoTuristicoAvgAggregateOutputType | null
    _sum: PontoTuristicoSumAggregateOutputType | null
    _min: PontoTuristicoMinAggregateOutputType | null
    _max: PontoTuristicoMaxAggregateOutputType | null
  }

  type GetPontoTuristicoGroupByPayload<T extends pontoTuristicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PontoTuristicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PontoTuristicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PontoTuristicoGroupByOutputType[P]>
            : GetScalarType<T[P], PontoTuristicoGroupByOutputType[P]>
        }
      >
    >


  export type pontoTuristicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    categoria?: boolean
    descricao?: boolean
    endereco?: boolean
    foto?: boolean
  }, ExtArgs["result"]["pontoTuristico"]>

  export type pontoTuristicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    categoria?: boolean
    descricao?: boolean
    endereco?: boolean
    foto?: boolean
  }, ExtArgs["result"]["pontoTuristico"]>

  export type pontoTuristicoSelectScalar = {
    id?: boolean
    nome?: boolean
    categoria?: boolean
    descricao?: boolean
    endereco?: boolean
    foto?: boolean
  }


  export type $pontoTuristicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pontoTuristico"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      categoria: string
      descricao: string
      endereco: string
      foto: string
    }, ExtArgs["result"]["pontoTuristico"]>
    composites: {}
  }

  type pontoTuristicoGetPayload<S extends boolean | null | undefined | pontoTuristicoDefaultArgs> = $Result.GetResult<Prisma.$pontoTuristicoPayload, S>

  type pontoTuristicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<pontoTuristicoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PontoTuristicoCountAggregateInputType | true
    }

  export interface pontoTuristicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pontoTuristico'], meta: { name: 'pontoTuristico' } }
    /**
     * Find zero or one PontoTuristico that matches the filter.
     * @param {pontoTuristicoFindUniqueArgs} args - Arguments to find a PontoTuristico
     * @example
     * // Get one PontoTuristico
     * const pontoTuristico = await prisma.pontoTuristico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pontoTuristicoFindUniqueArgs>(args: SelectSubset<T, pontoTuristicoFindUniqueArgs<ExtArgs>>): Prisma__pontoTuristicoClient<$Result.GetResult<Prisma.$pontoTuristicoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PontoTuristico that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {pontoTuristicoFindUniqueOrThrowArgs} args - Arguments to find a PontoTuristico
     * @example
     * // Get one PontoTuristico
     * const pontoTuristico = await prisma.pontoTuristico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pontoTuristicoFindUniqueOrThrowArgs>(args: SelectSubset<T, pontoTuristicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pontoTuristicoClient<$Result.GetResult<Prisma.$pontoTuristicoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PontoTuristico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pontoTuristicoFindFirstArgs} args - Arguments to find a PontoTuristico
     * @example
     * // Get one PontoTuristico
     * const pontoTuristico = await prisma.pontoTuristico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pontoTuristicoFindFirstArgs>(args?: SelectSubset<T, pontoTuristicoFindFirstArgs<ExtArgs>>): Prisma__pontoTuristicoClient<$Result.GetResult<Prisma.$pontoTuristicoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PontoTuristico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pontoTuristicoFindFirstOrThrowArgs} args - Arguments to find a PontoTuristico
     * @example
     * // Get one PontoTuristico
     * const pontoTuristico = await prisma.pontoTuristico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pontoTuristicoFindFirstOrThrowArgs>(args?: SelectSubset<T, pontoTuristicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pontoTuristicoClient<$Result.GetResult<Prisma.$pontoTuristicoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PontoTuristicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pontoTuristicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PontoTuristicos
     * const pontoTuristicos = await prisma.pontoTuristico.findMany()
     * 
     * // Get first 10 PontoTuristicos
     * const pontoTuristicos = await prisma.pontoTuristico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pontoTuristicoWithIdOnly = await prisma.pontoTuristico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pontoTuristicoFindManyArgs>(args?: SelectSubset<T, pontoTuristicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pontoTuristicoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PontoTuristico.
     * @param {pontoTuristicoCreateArgs} args - Arguments to create a PontoTuristico.
     * @example
     * // Create one PontoTuristico
     * const PontoTuristico = await prisma.pontoTuristico.create({
     *   data: {
     *     // ... data to create a PontoTuristico
     *   }
     * })
     * 
     */
    create<T extends pontoTuristicoCreateArgs>(args: SelectSubset<T, pontoTuristicoCreateArgs<ExtArgs>>): Prisma__pontoTuristicoClient<$Result.GetResult<Prisma.$pontoTuristicoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PontoTuristicos.
     * @param {pontoTuristicoCreateManyArgs} args - Arguments to create many PontoTuristicos.
     * @example
     * // Create many PontoTuristicos
     * const pontoTuristico = await prisma.pontoTuristico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pontoTuristicoCreateManyArgs>(args?: SelectSubset<T, pontoTuristicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PontoTuristicos and returns the data saved in the database.
     * @param {pontoTuristicoCreateManyAndReturnArgs} args - Arguments to create many PontoTuristicos.
     * @example
     * // Create many PontoTuristicos
     * const pontoTuristico = await prisma.pontoTuristico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PontoTuristicos and only return the `id`
     * const pontoTuristicoWithIdOnly = await prisma.pontoTuristico.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pontoTuristicoCreateManyAndReturnArgs>(args?: SelectSubset<T, pontoTuristicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pontoTuristicoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PontoTuristico.
     * @param {pontoTuristicoDeleteArgs} args - Arguments to delete one PontoTuristico.
     * @example
     * // Delete one PontoTuristico
     * const PontoTuristico = await prisma.pontoTuristico.delete({
     *   where: {
     *     // ... filter to delete one PontoTuristico
     *   }
     * })
     * 
     */
    delete<T extends pontoTuristicoDeleteArgs>(args: SelectSubset<T, pontoTuristicoDeleteArgs<ExtArgs>>): Prisma__pontoTuristicoClient<$Result.GetResult<Prisma.$pontoTuristicoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PontoTuristico.
     * @param {pontoTuristicoUpdateArgs} args - Arguments to update one PontoTuristico.
     * @example
     * // Update one PontoTuristico
     * const pontoTuristico = await prisma.pontoTuristico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pontoTuristicoUpdateArgs>(args: SelectSubset<T, pontoTuristicoUpdateArgs<ExtArgs>>): Prisma__pontoTuristicoClient<$Result.GetResult<Prisma.$pontoTuristicoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PontoTuristicos.
     * @param {pontoTuristicoDeleteManyArgs} args - Arguments to filter PontoTuristicos to delete.
     * @example
     * // Delete a few PontoTuristicos
     * const { count } = await prisma.pontoTuristico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pontoTuristicoDeleteManyArgs>(args?: SelectSubset<T, pontoTuristicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PontoTuristicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pontoTuristicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PontoTuristicos
     * const pontoTuristico = await prisma.pontoTuristico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pontoTuristicoUpdateManyArgs>(args: SelectSubset<T, pontoTuristicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PontoTuristico.
     * @param {pontoTuristicoUpsertArgs} args - Arguments to update or create a PontoTuristico.
     * @example
     * // Update or create a PontoTuristico
     * const pontoTuristico = await prisma.pontoTuristico.upsert({
     *   create: {
     *     // ... data to create a PontoTuristico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PontoTuristico we want to update
     *   }
     * })
     */
    upsert<T extends pontoTuristicoUpsertArgs>(args: SelectSubset<T, pontoTuristicoUpsertArgs<ExtArgs>>): Prisma__pontoTuristicoClient<$Result.GetResult<Prisma.$pontoTuristicoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PontoTuristicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pontoTuristicoCountArgs} args - Arguments to filter PontoTuristicos to count.
     * @example
     * // Count the number of PontoTuristicos
     * const count = await prisma.pontoTuristico.count({
     *   where: {
     *     // ... the filter for the PontoTuristicos we want to count
     *   }
     * })
    **/
    count<T extends pontoTuristicoCountArgs>(
      args?: Subset<T, pontoTuristicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PontoTuristicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PontoTuristico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PontoTuristicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PontoTuristicoAggregateArgs>(args: Subset<T, PontoTuristicoAggregateArgs>): Prisma.PrismaPromise<GetPontoTuristicoAggregateType<T>>

    /**
     * Group by PontoTuristico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pontoTuristicoGroupByArgs} args - Group by arguments.
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
      T extends pontoTuristicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pontoTuristicoGroupByArgs['orderBy'] }
        : { orderBy?: pontoTuristicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pontoTuristicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPontoTuristicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pontoTuristico model
   */
  readonly fields: pontoTuristicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pontoTuristico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pontoTuristicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the pontoTuristico model
   */ 
  interface pontoTuristicoFieldRefs {
    readonly id: FieldRef<"pontoTuristico", 'Int'>
    readonly nome: FieldRef<"pontoTuristico", 'String'>
    readonly categoria: FieldRef<"pontoTuristico", 'String'>
    readonly descricao: FieldRef<"pontoTuristico", 'String'>
    readonly endereco: FieldRef<"pontoTuristico", 'String'>
    readonly foto: FieldRef<"pontoTuristico", 'String'>
  }
    

  // Custom InputTypes
  /**
   * pontoTuristico findUnique
   */
  export type pontoTuristicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pontoTuristico
     */
    select?: pontoTuristicoSelect<ExtArgs> | null
    /**
     * Filter, which pontoTuristico to fetch.
     */
    where: pontoTuristicoWhereUniqueInput
  }

  /**
   * pontoTuristico findUniqueOrThrow
   */
  export type pontoTuristicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pontoTuristico
     */
    select?: pontoTuristicoSelect<ExtArgs> | null
    /**
     * Filter, which pontoTuristico to fetch.
     */
    where: pontoTuristicoWhereUniqueInput
  }

  /**
   * pontoTuristico findFirst
   */
  export type pontoTuristicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pontoTuristico
     */
    select?: pontoTuristicoSelect<ExtArgs> | null
    /**
     * Filter, which pontoTuristico to fetch.
     */
    where?: pontoTuristicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pontoTuristicos to fetch.
     */
    orderBy?: pontoTuristicoOrderByWithRelationInput | pontoTuristicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pontoTuristicos.
     */
    cursor?: pontoTuristicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pontoTuristicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pontoTuristicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pontoTuristicos.
     */
    distinct?: PontoTuristicoScalarFieldEnum | PontoTuristicoScalarFieldEnum[]
  }

  /**
   * pontoTuristico findFirstOrThrow
   */
  export type pontoTuristicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pontoTuristico
     */
    select?: pontoTuristicoSelect<ExtArgs> | null
    /**
     * Filter, which pontoTuristico to fetch.
     */
    where?: pontoTuristicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pontoTuristicos to fetch.
     */
    orderBy?: pontoTuristicoOrderByWithRelationInput | pontoTuristicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pontoTuristicos.
     */
    cursor?: pontoTuristicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pontoTuristicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pontoTuristicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pontoTuristicos.
     */
    distinct?: PontoTuristicoScalarFieldEnum | PontoTuristicoScalarFieldEnum[]
  }

  /**
   * pontoTuristico findMany
   */
  export type pontoTuristicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pontoTuristico
     */
    select?: pontoTuristicoSelect<ExtArgs> | null
    /**
     * Filter, which pontoTuristicos to fetch.
     */
    where?: pontoTuristicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pontoTuristicos to fetch.
     */
    orderBy?: pontoTuristicoOrderByWithRelationInput | pontoTuristicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pontoTuristicos.
     */
    cursor?: pontoTuristicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pontoTuristicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pontoTuristicos.
     */
    skip?: number
    distinct?: PontoTuristicoScalarFieldEnum | PontoTuristicoScalarFieldEnum[]
  }

  /**
   * pontoTuristico create
   */
  export type pontoTuristicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pontoTuristico
     */
    select?: pontoTuristicoSelect<ExtArgs> | null
    /**
     * The data needed to create a pontoTuristico.
     */
    data: XOR<pontoTuristicoCreateInput, pontoTuristicoUncheckedCreateInput>
  }

  /**
   * pontoTuristico createMany
   */
  export type pontoTuristicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pontoTuristicos.
     */
    data: pontoTuristicoCreateManyInput | pontoTuristicoCreateManyInput[]
  }

  /**
   * pontoTuristico createManyAndReturn
   */
  export type pontoTuristicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pontoTuristico
     */
    select?: pontoTuristicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many pontoTuristicos.
     */
    data: pontoTuristicoCreateManyInput | pontoTuristicoCreateManyInput[]
  }

  /**
   * pontoTuristico update
   */
  export type pontoTuristicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pontoTuristico
     */
    select?: pontoTuristicoSelect<ExtArgs> | null
    /**
     * The data needed to update a pontoTuristico.
     */
    data: XOR<pontoTuristicoUpdateInput, pontoTuristicoUncheckedUpdateInput>
    /**
     * Choose, which pontoTuristico to update.
     */
    where: pontoTuristicoWhereUniqueInput
  }

  /**
   * pontoTuristico updateMany
   */
  export type pontoTuristicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pontoTuristicos.
     */
    data: XOR<pontoTuristicoUpdateManyMutationInput, pontoTuristicoUncheckedUpdateManyInput>
    /**
     * Filter which pontoTuristicos to update
     */
    where?: pontoTuristicoWhereInput
  }

  /**
   * pontoTuristico upsert
   */
  export type pontoTuristicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pontoTuristico
     */
    select?: pontoTuristicoSelect<ExtArgs> | null
    /**
     * The filter to search for the pontoTuristico to update in case it exists.
     */
    where: pontoTuristicoWhereUniqueInput
    /**
     * In case the pontoTuristico found by the `where` argument doesn't exist, create a new pontoTuristico with this data.
     */
    create: XOR<pontoTuristicoCreateInput, pontoTuristicoUncheckedCreateInput>
    /**
     * In case the pontoTuristico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pontoTuristicoUpdateInput, pontoTuristicoUncheckedUpdateInput>
  }

  /**
   * pontoTuristico delete
   */
  export type pontoTuristicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pontoTuristico
     */
    select?: pontoTuristicoSelect<ExtArgs> | null
    /**
     * Filter which pontoTuristico to delete.
     */
    where: pontoTuristicoWhereUniqueInput
  }

  /**
   * pontoTuristico deleteMany
   */
  export type pontoTuristicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pontoTuristicos to delete
     */
    where?: pontoTuristicoWhereInput
  }

  /**
   * pontoTuristico without action
   */
  export type pontoTuristicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pontoTuristico
     */
    select?: pontoTuristicoSelect<ExtArgs> | null
  }


  /**
   * Model eventos
   */

  export type AggregateEventos = {
    _count: EventosCountAggregateOutputType | null
    _avg: EventosAvgAggregateOutputType | null
    _sum: EventosSumAggregateOutputType | null
    _min: EventosMinAggregateOutputType | null
    _max: EventosMaxAggregateOutputType | null
  }

  export type EventosAvgAggregateOutputType = {
    id: number | null
  }

  export type EventosSumAggregateOutputType = {
    id: number | null
  }

  export type EventosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    local: string | null
    contato: string | null
    descricao: string | null
    foto: string | null
  }

  export type EventosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    local: string | null
    contato: string | null
    descricao: string | null
    foto: string | null
  }

  export type EventosCountAggregateOutputType = {
    id: number
    nome: number
    local: number
    contato: number
    descricao: number
    foto: number
    _all: number
  }


  export type EventosAvgAggregateInputType = {
    id?: true
  }

  export type EventosSumAggregateInputType = {
    id?: true
  }

  export type EventosMinAggregateInputType = {
    id?: true
    nome?: true
    local?: true
    contato?: true
    descricao?: true
    foto?: true
  }

  export type EventosMaxAggregateInputType = {
    id?: true
    nome?: true
    local?: true
    contato?: true
    descricao?: true
    foto?: true
  }

  export type EventosCountAggregateInputType = {
    id?: true
    nome?: true
    local?: true
    contato?: true
    descricao?: true
    foto?: true
    _all?: true
  }

  export type EventosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventos to aggregate.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eventos
    **/
    _count?: true | EventosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventosMaxAggregateInputType
  }

  export type GetEventosAggregateType<T extends EventosAggregateArgs> = {
        [P in keyof T & keyof AggregateEventos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventos[P]>
      : GetScalarType<T[P], AggregateEventos[P]>
  }




  export type eventosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventosWhereInput
    orderBy?: eventosOrderByWithAggregationInput | eventosOrderByWithAggregationInput[]
    by: EventosScalarFieldEnum[] | EventosScalarFieldEnum
    having?: eventosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventosCountAggregateInputType | true
    _avg?: EventosAvgAggregateInputType
    _sum?: EventosSumAggregateInputType
    _min?: EventosMinAggregateInputType
    _max?: EventosMaxAggregateInputType
  }

  export type EventosGroupByOutputType = {
    id: number
    nome: string
    local: string
    contato: string
    descricao: string
    foto: string
    _count: EventosCountAggregateOutputType | null
    _avg: EventosAvgAggregateOutputType | null
    _sum: EventosSumAggregateOutputType | null
    _min: EventosMinAggregateOutputType | null
    _max: EventosMaxAggregateOutputType | null
  }

  type GetEventosGroupByPayload<T extends eventosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventosGroupByOutputType[P]>
            : GetScalarType<T[P], EventosGroupByOutputType[P]>
        }
      >
    >


  export type eventosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    local?: boolean
    contato?: boolean
    descricao?: boolean
    foto?: boolean
  }, ExtArgs["result"]["eventos"]>

  export type eventosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    local?: boolean
    contato?: boolean
    descricao?: boolean
    foto?: boolean
  }, ExtArgs["result"]["eventos"]>

  export type eventosSelectScalar = {
    id?: boolean
    nome?: boolean
    local?: boolean
    contato?: boolean
    descricao?: boolean
    foto?: boolean
  }


  export type $eventosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "eventos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      local: string
      contato: string
      descricao: string
      foto: string
    }, ExtArgs["result"]["eventos"]>
    composites: {}
  }

  type eventosGetPayload<S extends boolean | null | undefined | eventosDefaultArgs> = $Result.GetResult<Prisma.$eventosPayload, S>

  type eventosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<eventosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventosCountAggregateInputType | true
    }

  export interface eventosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['eventos'], meta: { name: 'eventos' } }
    /**
     * Find zero or one Eventos that matches the filter.
     * @param {eventosFindUniqueArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventosFindUniqueArgs>(args: SelectSubset<T, eventosFindUniqueArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Eventos that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {eventosFindUniqueOrThrowArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventosFindUniqueOrThrowArgs>(args: SelectSubset<T, eventosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosFindFirstArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventosFindFirstArgs>(args?: SelectSubset<T, eventosFindFirstArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Eventos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosFindFirstOrThrowArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventosFindFirstOrThrowArgs>(args?: SelectSubset<T, eventosFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.eventos.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.eventos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventosWithIdOnly = await prisma.eventos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eventosFindManyArgs>(args?: SelectSubset<T, eventosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Eventos.
     * @param {eventosCreateArgs} args - Arguments to create a Eventos.
     * @example
     * // Create one Eventos
     * const Eventos = await prisma.eventos.create({
     *   data: {
     *     // ... data to create a Eventos
     *   }
     * })
     * 
     */
    create<T extends eventosCreateArgs>(args: SelectSubset<T, eventosCreateArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Eventos.
     * @param {eventosCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const eventos = await prisma.eventos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventosCreateManyArgs>(args?: SelectSubset<T, eventosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {eventosCreateManyAndReturnArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const eventos = await prisma.eventos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos and only return the `id`
     * const eventosWithIdOnly = await prisma.eventos.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eventosCreateManyAndReturnArgs>(args?: SelectSubset<T, eventosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Eventos.
     * @param {eventosDeleteArgs} args - Arguments to delete one Eventos.
     * @example
     * // Delete one Eventos
     * const Eventos = await prisma.eventos.delete({
     *   where: {
     *     // ... filter to delete one Eventos
     *   }
     * })
     * 
     */
    delete<T extends eventosDeleteArgs>(args: SelectSubset<T, eventosDeleteArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Eventos.
     * @param {eventosUpdateArgs} args - Arguments to update one Eventos.
     * @example
     * // Update one Eventos
     * const eventos = await prisma.eventos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventosUpdateArgs>(args: SelectSubset<T, eventosUpdateArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Eventos.
     * @param {eventosDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.eventos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventosDeleteManyArgs>(args?: SelectSubset<T, eventosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const eventos = await prisma.eventos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventosUpdateManyArgs>(args: SelectSubset<T, eventosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Eventos.
     * @param {eventosUpsertArgs} args - Arguments to update or create a Eventos.
     * @example
     * // Update or create a Eventos
     * const eventos = await prisma.eventos.upsert({
     *   create: {
     *     // ... data to create a Eventos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Eventos we want to update
     *   }
     * })
     */
    upsert<T extends eventosUpsertArgs>(args: SelectSubset<T, eventosUpsertArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.eventos.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends eventosCountArgs>(
      args?: Subset<T, eventosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventosAggregateArgs>(args: Subset<T, EventosAggregateArgs>): Prisma.PrismaPromise<GetEventosAggregateType<T>>

    /**
     * Group by Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosGroupByArgs} args - Group by arguments.
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
      T extends eventosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventosGroupByArgs['orderBy'] }
        : { orderBy?: eventosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, eventosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the eventos model
   */
  readonly fields: eventosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for eventos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the eventos model
   */ 
  interface eventosFieldRefs {
    readonly id: FieldRef<"eventos", 'Int'>
    readonly nome: FieldRef<"eventos", 'String'>
    readonly local: FieldRef<"eventos", 'String'>
    readonly contato: FieldRef<"eventos", 'String'>
    readonly descricao: FieldRef<"eventos", 'String'>
    readonly foto: FieldRef<"eventos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * eventos findUnique
   */
  export type eventosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos findUniqueOrThrow
   */
  export type eventosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos findFirst
   */
  export type eventosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos.
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos.
     */
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * eventos findFirstOrThrow
   */
  export type eventosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos.
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos.
     */
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * eventos findMany
   */
  export type eventosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eventos.
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * eventos create
   */
  export type eventosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * The data needed to create a eventos.
     */
    data: XOR<eventosCreateInput, eventosUncheckedCreateInput>
  }

  /**
   * eventos createMany
   */
  export type eventosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many eventos.
     */
    data: eventosCreateManyInput | eventosCreateManyInput[]
  }

  /**
   * eventos createManyAndReturn
   */
  export type eventosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many eventos.
     */
    data: eventosCreateManyInput | eventosCreateManyInput[]
  }

  /**
   * eventos update
   */
  export type eventosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * The data needed to update a eventos.
     */
    data: XOR<eventosUpdateInput, eventosUncheckedUpdateInput>
    /**
     * Choose, which eventos to update.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos updateMany
   */
  export type eventosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update eventos.
     */
    data: XOR<eventosUpdateManyMutationInput, eventosUncheckedUpdateManyInput>
    /**
     * Filter which eventos to update
     */
    where?: eventosWhereInput
  }

  /**
   * eventos upsert
   */
  export type eventosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * The filter to search for the eventos to update in case it exists.
     */
    where: eventosWhereUniqueInput
    /**
     * In case the eventos found by the `where` argument doesn't exist, create a new eventos with this data.
     */
    create: XOR<eventosCreateInput, eventosUncheckedCreateInput>
    /**
     * In case the eventos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventosUpdateInput, eventosUncheckedUpdateInput>
  }

  /**
   * eventos delete
   */
  export type eventosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Filter which eventos to delete.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos deleteMany
   */
  export type eventosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventos to delete
     */
    where?: eventosWhereInput
  }

  /**
   * eventos without action
   */
  export type eventosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
  }


  /**
   * Model gastronomia
   */

  export type AggregateGastronomia = {
    _count: GastronomiaCountAggregateOutputType | null
    _avg: GastronomiaAvgAggregateOutputType | null
    _sum: GastronomiaSumAggregateOutputType | null
    _min: GastronomiaMinAggregateOutputType | null
    _max: GastronomiaMaxAggregateOutputType | null
  }

  export type GastronomiaAvgAggregateOutputType = {
    id: number | null
  }

  export type GastronomiaSumAggregateOutputType = {
    id: number | null
  }

  export type GastronomiaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    categoria: string | null
    telefone: string | null
    descricao: string | null
    foto: string | null
  }

  export type GastronomiaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    categoria: string | null
    telefone: string | null
    descricao: string | null
    foto: string | null
  }

  export type GastronomiaCountAggregateOutputType = {
    id: number
    nome: number
    categoria: number
    telefone: number
    descricao: number
    foto: number
    _all: number
  }


  export type GastronomiaAvgAggregateInputType = {
    id?: true
  }

  export type GastronomiaSumAggregateInputType = {
    id?: true
  }

  export type GastronomiaMinAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    telefone?: true
    descricao?: true
    foto?: true
  }

  export type GastronomiaMaxAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    telefone?: true
    descricao?: true
    foto?: true
  }

  export type GastronomiaCountAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    telefone?: true
    descricao?: true
    foto?: true
    _all?: true
  }

  export type GastronomiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gastronomia to aggregate.
     */
    where?: gastronomiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gastronomias to fetch.
     */
    orderBy?: gastronomiaOrderByWithRelationInput | gastronomiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gastronomiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gastronomias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gastronomias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gastronomias
    **/
    _count?: true | GastronomiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GastronomiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GastronomiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GastronomiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GastronomiaMaxAggregateInputType
  }

  export type GetGastronomiaAggregateType<T extends GastronomiaAggregateArgs> = {
        [P in keyof T & keyof AggregateGastronomia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGastronomia[P]>
      : GetScalarType<T[P], AggregateGastronomia[P]>
  }




  export type gastronomiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gastronomiaWhereInput
    orderBy?: gastronomiaOrderByWithAggregationInput | gastronomiaOrderByWithAggregationInput[]
    by: GastronomiaScalarFieldEnum[] | GastronomiaScalarFieldEnum
    having?: gastronomiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GastronomiaCountAggregateInputType | true
    _avg?: GastronomiaAvgAggregateInputType
    _sum?: GastronomiaSumAggregateInputType
    _min?: GastronomiaMinAggregateInputType
    _max?: GastronomiaMaxAggregateInputType
  }

  export type GastronomiaGroupByOutputType = {
    id: number
    nome: string
    categoria: string
    telefone: string
    descricao: string
    foto: string
    _count: GastronomiaCountAggregateOutputType | null
    _avg: GastronomiaAvgAggregateOutputType | null
    _sum: GastronomiaSumAggregateOutputType | null
    _min: GastronomiaMinAggregateOutputType | null
    _max: GastronomiaMaxAggregateOutputType | null
  }

  type GetGastronomiaGroupByPayload<T extends gastronomiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GastronomiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GastronomiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GastronomiaGroupByOutputType[P]>
            : GetScalarType<T[P], GastronomiaGroupByOutputType[P]>
        }
      >
    >


  export type gastronomiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    categoria?: boolean
    telefone?: boolean
    descricao?: boolean
    foto?: boolean
  }, ExtArgs["result"]["gastronomia"]>

  export type gastronomiaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    categoria?: boolean
    telefone?: boolean
    descricao?: boolean
    foto?: boolean
  }, ExtArgs["result"]["gastronomia"]>

  export type gastronomiaSelectScalar = {
    id?: boolean
    nome?: boolean
    categoria?: boolean
    telefone?: boolean
    descricao?: boolean
    foto?: boolean
  }


  export type $gastronomiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gastronomia"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      categoria: string
      telefone: string
      descricao: string
      foto: string
    }, ExtArgs["result"]["gastronomia"]>
    composites: {}
  }

  type gastronomiaGetPayload<S extends boolean | null | undefined | gastronomiaDefaultArgs> = $Result.GetResult<Prisma.$gastronomiaPayload, S>

  type gastronomiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<gastronomiaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GastronomiaCountAggregateInputType | true
    }

  export interface gastronomiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gastronomia'], meta: { name: 'gastronomia' } }
    /**
     * Find zero or one Gastronomia that matches the filter.
     * @param {gastronomiaFindUniqueArgs} args - Arguments to find a Gastronomia
     * @example
     * // Get one Gastronomia
     * const gastronomia = await prisma.gastronomia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gastronomiaFindUniqueArgs>(args: SelectSubset<T, gastronomiaFindUniqueArgs<ExtArgs>>): Prisma__gastronomiaClient<$Result.GetResult<Prisma.$gastronomiaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Gastronomia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {gastronomiaFindUniqueOrThrowArgs} args - Arguments to find a Gastronomia
     * @example
     * // Get one Gastronomia
     * const gastronomia = await prisma.gastronomia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gastronomiaFindUniqueOrThrowArgs>(args: SelectSubset<T, gastronomiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gastronomiaClient<$Result.GetResult<Prisma.$gastronomiaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Gastronomia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastronomiaFindFirstArgs} args - Arguments to find a Gastronomia
     * @example
     * // Get one Gastronomia
     * const gastronomia = await prisma.gastronomia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gastronomiaFindFirstArgs>(args?: SelectSubset<T, gastronomiaFindFirstArgs<ExtArgs>>): Prisma__gastronomiaClient<$Result.GetResult<Prisma.$gastronomiaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Gastronomia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastronomiaFindFirstOrThrowArgs} args - Arguments to find a Gastronomia
     * @example
     * // Get one Gastronomia
     * const gastronomia = await prisma.gastronomia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gastronomiaFindFirstOrThrowArgs>(args?: SelectSubset<T, gastronomiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__gastronomiaClient<$Result.GetResult<Prisma.$gastronomiaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Gastronomias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastronomiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gastronomias
     * const gastronomias = await prisma.gastronomia.findMany()
     * 
     * // Get first 10 Gastronomias
     * const gastronomias = await prisma.gastronomia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gastronomiaWithIdOnly = await prisma.gastronomia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gastronomiaFindManyArgs>(args?: SelectSubset<T, gastronomiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gastronomiaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Gastronomia.
     * @param {gastronomiaCreateArgs} args - Arguments to create a Gastronomia.
     * @example
     * // Create one Gastronomia
     * const Gastronomia = await prisma.gastronomia.create({
     *   data: {
     *     // ... data to create a Gastronomia
     *   }
     * })
     * 
     */
    create<T extends gastronomiaCreateArgs>(args: SelectSubset<T, gastronomiaCreateArgs<ExtArgs>>): Prisma__gastronomiaClient<$Result.GetResult<Prisma.$gastronomiaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Gastronomias.
     * @param {gastronomiaCreateManyArgs} args - Arguments to create many Gastronomias.
     * @example
     * // Create many Gastronomias
     * const gastronomia = await prisma.gastronomia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gastronomiaCreateManyArgs>(args?: SelectSubset<T, gastronomiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gastronomias and returns the data saved in the database.
     * @param {gastronomiaCreateManyAndReturnArgs} args - Arguments to create many Gastronomias.
     * @example
     * // Create many Gastronomias
     * const gastronomia = await prisma.gastronomia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gastronomias and only return the `id`
     * const gastronomiaWithIdOnly = await prisma.gastronomia.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gastronomiaCreateManyAndReturnArgs>(args?: SelectSubset<T, gastronomiaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gastronomiaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Gastronomia.
     * @param {gastronomiaDeleteArgs} args - Arguments to delete one Gastronomia.
     * @example
     * // Delete one Gastronomia
     * const Gastronomia = await prisma.gastronomia.delete({
     *   where: {
     *     // ... filter to delete one Gastronomia
     *   }
     * })
     * 
     */
    delete<T extends gastronomiaDeleteArgs>(args: SelectSubset<T, gastronomiaDeleteArgs<ExtArgs>>): Prisma__gastronomiaClient<$Result.GetResult<Prisma.$gastronomiaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Gastronomia.
     * @param {gastronomiaUpdateArgs} args - Arguments to update one Gastronomia.
     * @example
     * // Update one Gastronomia
     * const gastronomia = await prisma.gastronomia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gastronomiaUpdateArgs>(args: SelectSubset<T, gastronomiaUpdateArgs<ExtArgs>>): Prisma__gastronomiaClient<$Result.GetResult<Prisma.$gastronomiaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Gastronomias.
     * @param {gastronomiaDeleteManyArgs} args - Arguments to filter Gastronomias to delete.
     * @example
     * // Delete a few Gastronomias
     * const { count } = await prisma.gastronomia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gastronomiaDeleteManyArgs>(args?: SelectSubset<T, gastronomiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gastronomias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastronomiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gastronomias
     * const gastronomia = await prisma.gastronomia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gastronomiaUpdateManyArgs>(args: SelectSubset<T, gastronomiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gastronomia.
     * @param {gastronomiaUpsertArgs} args - Arguments to update or create a Gastronomia.
     * @example
     * // Update or create a Gastronomia
     * const gastronomia = await prisma.gastronomia.upsert({
     *   create: {
     *     // ... data to create a Gastronomia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gastronomia we want to update
     *   }
     * })
     */
    upsert<T extends gastronomiaUpsertArgs>(args: SelectSubset<T, gastronomiaUpsertArgs<ExtArgs>>): Prisma__gastronomiaClient<$Result.GetResult<Prisma.$gastronomiaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Gastronomias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastronomiaCountArgs} args - Arguments to filter Gastronomias to count.
     * @example
     * // Count the number of Gastronomias
     * const count = await prisma.gastronomia.count({
     *   where: {
     *     // ... the filter for the Gastronomias we want to count
     *   }
     * })
    **/
    count<T extends gastronomiaCountArgs>(
      args?: Subset<T, gastronomiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GastronomiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gastronomia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastronomiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GastronomiaAggregateArgs>(args: Subset<T, GastronomiaAggregateArgs>): Prisma.PrismaPromise<GetGastronomiaAggregateType<T>>

    /**
     * Group by Gastronomia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastronomiaGroupByArgs} args - Group by arguments.
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
      T extends gastronomiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gastronomiaGroupByArgs['orderBy'] }
        : { orderBy?: gastronomiaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, gastronomiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGastronomiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gastronomia model
   */
  readonly fields: gastronomiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gastronomia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gastronomiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the gastronomia model
   */ 
  interface gastronomiaFieldRefs {
    readonly id: FieldRef<"gastronomia", 'Int'>
    readonly nome: FieldRef<"gastronomia", 'String'>
    readonly categoria: FieldRef<"gastronomia", 'String'>
    readonly telefone: FieldRef<"gastronomia", 'String'>
    readonly descricao: FieldRef<"gastronomia", 'String'>
    readonly foto: FieldRef<"gastronomia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * gastronomia findUnique
   */
  export type gastronomiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastronomia
     */
    select?: gastronomiaSelect<ExtArgs> | null
    /**
     * Filter, which gastronomia to fetch.
     */
    where: gastronomiaWhereUniqueInput
  }

  /**
   * gastronomia findUniqueOrThrow
   */
  export type gastronomiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastronomia
     */
    select?: gastronomiaSelect<ExtArgs> | null
    /**
     * Filter, which gastronomia to fetch.
     */
    where: gastronomiaWhereUniqueInput
  }

  /**
   * gastronomia findFirst
   */
  export type gastronomiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastronomia
     */
    select?: gastronomiaSelect<ExtArgs> | null
    /**
     * Filter, which gastronomia to fetch.
     */
    where?: gastronomiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gastronomias to fetch.
     */
    orderBy?: gastronomiaOrderByWithRelationInput | gastronomiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gastronomias.
     */
    cursor?: gastronomiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gastronomias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gastronomias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gastronomias.
     */
    distinct?: GastronomiaScalarFieldEnum | GastronomiaScalarFieldEnum[]
  }

  /**
   * gastronomia findFirstOrThrow
   */
  export type gastronomiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastronomia
     */
    select?: gastronomiaSelect<ExtArgs> | null
    /**
     * Filter, which gastronomia to fetch.
     */
    where?: gastronomiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gastronomias to fetch.
     */
    orderBy?: gastronomiaOrderByWithRelationInput | gastronomiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gastronomias.
     */
    cursor?: gastronomiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gastronomias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gastronomias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gastronomias.
     */
    distinct?: GastronomiaScalarFieldEnum | GastronomiaScalarFieldEnum[]
  }

  /**
   * gastronomia findMany
   */
  export type gastronomiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastronomia
     */
    select?: gastronomiaSelect<ExtArgs> | null
    /**
     * Filter, which gastronomias to fetch.
     */
    where?: gastronomiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gastronomias to fetch.
     */
    orderBy?: gastronomiaOrderByWithRelationInput | gastronomiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gastronomias.
     */
    cursor?: gastronomiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gastronomias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gastronomias.
     */
    skip?: number
    distinct?: GastronomiaScalarFieldEnum | GastronomiaScalarFieldEnum[]
  }

  /**
   * gastronomia create
   */
  export type gastronomiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastronomia
     */
    select?: gastronomiaSelect<ExtArgs> | null
    /**
     * The data needed to create a gastronomia.
     */
    data: XOR<gastronomiaCreateInput, gastronomiaUncheckedCreateInput>
  }

  /**
   * gastronomia createMany
   */
  export type gastronomiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gastronomias.
     */
    data: gastronomiaCreateManyInput | gastronomiaCreateManyInput[]
  }

  /**
   * gastronomia createManyAndReturn
   */
  export type gastronomiaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastronomia
     */
    select?: gastronomiaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many gastronomias.
     */
    data: gastronomiaCreateManyInput | gastronomiaCreateManyInput[]
  }

  /**
   * gastronomia update
   */
  export type gastronomiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastronomia
     */
    select?: gastronomiaSelect<ExtArgs> | null
    /**
     * The data needed to update a gastronomia.
     */
    data: XOR<gastronomiaUpdateInput, gastronomiaUncheckedUpdateInput>
    /**
     * Choose, which gastronomia to update.
     */
    where: gastronomiaWhereUniqueInput
  }

  /**
   * gastronomia updateMany
   */
  export type gastronomiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gastronomias.
     */
    data: XOR<gastronomiaUpdateManyMutationInput, gastronomiaUncheckedUpdateManyInput>
    /**
     * Filter which gastronomias to update
     */
    where?: gastronomiaWhereInput
  }

  /**
   * gastronomia upsert
   */
  export type gastronomiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastronomia
     */
    select?: gastronomiaSelect<ExtArgs> | null
    /**
     * The filter to search for the gastronomia to update in case it exists.
     */
    where: gastronomiaWhereUniqueInput
    /**
     * In case the gastronomia found by the `where` argument doesn't exist, create a new gastronomia with this data.
     */
    create: XOR<gastronomiaCreateInput, gastronomiaUncheckedCreateInput>
    /**
     * In case the gastronomia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gastronomiaUpdateInput, gastronomiaUncheckedUpdateInput>
  }

  /**
   * gastronomia delete
   */
  export type gastronomiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastronomia
     */
    select?: gastronomiaSelect<ExtArgs> | null
    /**
     * Filter which gastronomia to delete.
     */
    where: gastronomiaWhereUniqueInput
  }

  /**
   * gastronomia deleteMany
   */
  export type gastronomiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gastronomias to delete
     */
    where?: gastronomiaWhereInput
  }

  /**
   * gastronomia without action
   */
  export type gastronomiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastronomia
     */
    select?: gastronomiaSelect<ExtArgs> | null
  }


  /**
   * Model hospedagem
   */

  export type AggregateHospedagem = {
    _count: HospedagemCountAggregateOutputType | null
    _avg: HospedagemAvgAggregateOutputType | null
    _sum: HospedagemSumAggregateOutputType | null
    _min: HospedagemMinAggregateOutputType | null
    _max: HospedagemMaxAggregateOutputType | null
  }

  export type HospedagemAvgAggregateOutputType = {
    id: number | null
  }

  export type HospedagemSumAggregateOutputType = {
    id: number | null
  }

  export type HospedagemMinAggregateOutputType = {
    id: number | null
    nome: string | null
    telefone: string | null
    descricao: string | null
    foto: string | null
  }

  export type HospedagemMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    telefone: string | null
    descricao: string | null
    foto: string | null
  }

  export type HospedagemCountAggregateOutputType = {
    id: number
    nome: number
    telefone: number
    descricao: number
    foto: number
    _all: number
  }


  export type HospedagemAvgAggregateInputType = {
    id?: true
  }

  export type HospedagemSumAggregateInputType = {
    id?: true
  }

  export type HospedagemMinAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    descricao?: true
    foto?: true
  }

  export type HospedagemMaxAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    descricao?: true
    foto?: true
  }

  export type HospedagemCountAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    descricao?: true
    foto?: true
    _all?: true
  }

  export type HospedagemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hospedagem to aggregate.
     */
    where?: hospedagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hospedagems to fetch.
     */
    orderBy?: hospedagemOrderByWithRelationInput | hospedagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hospedagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hospedagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hospedagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hospedagems
    **/
    _count?: true | HospedagemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HospedagemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HospedagemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospedagemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospedagemMaxAggregateInputType
  }

  export type GetHospedagemAggregateType<T extends HospedagemAggregateArgs> = {
        [P in keyof T & keyof AggregateHospedagem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospedagem[P]>
      : GetScalarType<T[P], AggregateHospedagem[P]>
  }




  export type hospedagemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hospedagemWhereInput
    orderBy?: hospedagemOrderByWithAggregationInput | hospedagemOrderByWithAggregationInput[]
    by: HospedagemScalarFieldEnum[] | HospedagemScalarFieldEnum
    having?: hospedagemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospedagemCountAggregateInputType | true
    _avg?: HospedagemAvgAggregateInputType
    _sum?: HospedagemSumAggregateInputType
    _min?: HospedagemMinAggregateInputType
    _max?: HospedagemMaxAggregateInputType
  }

  export type HospedagemGroupByOutputType = {
    id: number
    nome: string
    telefone: string
    descricao: string
    foto: string
    _count: HospedagemCountAggregateOutputType | null
    _avg: HospedagemAvgAggregateOutputType | null
    _sum: HospedagemSumAggregateOutputType | null
    _min: HospedagemMinAggregateOutputType | null
    _max: HospedagemMaxAggregateOutputType | null
  }

  type GetHospedagemGroupByPayload<T extends hospedagemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospedagemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospedagemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospedagemGroupByOutputType[P]>
            : GetScalarType<T[P], HospedagemGroupByOutputType[P]>
        }
      >
    >


  export type hospedagemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    descricao?: boolean
    foto?: boolean
  }, ExtArgs["result"]["hospedagem"]>

  export type hospedagemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    descricao?: boolean
    foto?: boolean
  }, ExtArgs["result"]["hospedagem"]>

  export type hospedagemSelectScalar = {
    id?: boolean
    nome?: boolean
    telefone?: boolean
    descricao?: boolean
    foto?: boolean
  }


  export type $hospedagemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hospedagem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      telefone: string
      descricao: string
      foto: string
    }, ExtArgs["result"]["hospedagem"]>
    composites: {}
  }

  type hospedagemGetPayload<S extends boolean | null | undefined | hospedagemDefaultArgs> = $Result.GetResult<Prisma.$hospedagemPayload, S>

  type hospedagemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<hospedagemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HospedagemCountAggregateInputType | true
    }

  export interface hospedagemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hospedagem'], meta: { name: 'hospedagem' } }
    /**
     * Find zero or one Hospedagem that matches the filter.
     * @param {hospedagemFindUniqueArgs} args - Arguments to find a Hospedagem
     * @example
     * // Get one Hospedagem
     * const hospedagem = await prisma.hospedagem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hospedagemFindUniqueArgs>(args: SelectSubset<T, hospedagemFindUniqueArgs<ExtArgs>>): Prisma__hospedagemClient<$Result.GetResult<Prisma.$hospedagemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Hospedagem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {hospedagemFindUniqueOrThrowArgs} args - Arguments to find a Hospedagem
     * @example
     * // Get one Hospedagem
     * const hospedagem = await prisma.hospedagem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hospedagemFindUniqueOrThrowArgs>(args: SelectSubset<T, hospedagemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hospedagemClient<$Result.GetResult<Prisma.$hospedagemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Hospedagem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospedagemFindFirstArgs} args - Arguments to find a Hospedagem
     * @example
     * // Get one Hospedagem
     * const hospedagem = await prisma.hospedagem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hospedagemFindFirstArgs>(args?: SelectSubset<T, hospedagemFindFirstArgs<ExtArgs>>): Prisma__hospedagemClient<$Result.GetResult<Prisma.$hospedagemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Hospedagem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospedagemFindFirstOrThrowArgs} args - Arguments to find a Hospedagem
     * @example
     * // Get one Hospedagem
     * const hospedagem = await prisma.hospedagem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hospedagemFindFirstOrThrowArgs>(args?: SelectSubset<T, hospedagemFindFirstOrThrowArgs<ExtArgs>>): Prisma__hospedagemClient<$Result.GetResult<Prisma.$hospedagemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Hospedagems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospedagemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospedagems
     * const hospedagems = await prisma.hospedagem.findMany()
     * 
     * // Get first 10 Hospedagems
     * const hospedagems = await prisma.hospedagem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hospedagemWithIdOnly = await prisma.hospedagem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hospedagemFindManyArgs>(args?: SelectSubset<T, hospedagemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hospedagemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Hospedagem.
     * @param {hospedagemCreateArgs} args - Arguments to create a Hospedagem.
     * @example
     * // Create one Hospedagem
     * const Hospedagem = await prisma.hospedagem.create({
     *   data: {
     *     // ... data to create a Hospedagem
     *   }
     * })
     * 
     */
    create<T extends hospedagemCreateArgs>(args: SelectSubset<T, hospedagemCreateArgs<ExtArgs>>): Prisma__hospedagemClient<$Result.GetResult<Prisma.$hospedagemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Hospedagems.
     * @param {hospedagemCreateManyArgs} args - Arguments to create many Hospedagems.
     * @example
     * // Create many Hospedagems
     * const hospedagem = await prisma.hospedagem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hospedagemCreateManyArgs>(args?: SelectSubset<T, hospedagemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hospedagems and returns the data saved in the database.
     * @param {hospedagemCreateManyAndReturnArgs} args - Arguments to create many Hospedagems.
     * @example
     * // Create many Hospedagems
     * const hospedagem = await prisma.hospedagem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hospedagems and only return the `id`
     * const hospedagemWithIdOnly = await prisma.hospedagem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hospedagemCreateManyAndReturnArgs>(args?: SelectSubset<T, hospedagemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hospedagemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Hospedagem.
     * @param {hospedagemDeleteArgs} args - Arguments to delete one Hospedagem.
     * @example
     * // Delete one Hospedagem
     * const Hospedagem = await prisma.hospedagem.delete({
     *   where: {
     *     // ... filter to delete one Hospedagem
     *   }
     * })
     * 
     */
    delete<T extends hospedagemDeleteArgs>(args: SelectSubset<T, hospedagemDeleteArgs<ExtArgs>>): Prisma__hospedagemClient<$Result.GetResult<Prisma.$hospedagemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Hospedagem.
     * @param {hospedagemUpdateArgs} args - Arguments to update one Hospedagem.
     * @example
     * // Update one Hospedagem
     * const hospedagem = await prisma.hospedagem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hospedagemUpdateArgs>(args: SelectSubset<T, hospedagemUpdateArgs<ExtArgs>>): Prisma__hospedagemClient<$Result.GetResult<Prisma.$hospedagemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Hospedagems.
     * @param {hospedagemDeleteManyArgs} args - Arguments to filter Hospedagems to delete.
     * @example
     * // Delete a few Hospedagems
     * const { count } = await prisma.hospedagem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hospedagemDeleteManyArgs>(args?: SelectSubset<T, hospedagemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospedagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospedagemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospedagems
     * const hospedagem = await prisma.hospedagem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hospedagemUpdateManyArgs>(args: SelectSubset<T, hospedagemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hospedagem.
     * @param {hospedagemUpsertArgs} args - Arguments to update or create a Hospedagem.
     * @example
     * // Update or create a Hospedagem
     * const hospedagem = await prisma.hospedagem.upsert({
     *   create: {
     *     // ... data to create a Hospedagem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospedagem we want to update
     *   }
     * })
     */
    upsert<T extends hospedagemUpsertArgs>(args: SelectSubset<T, hospedagemUpsertArgs<ExtArgs>>): Prisma__hospedagemClient<$Result.GetResult<Prisma.$hospedagemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Hospedagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospedagemCountArgs} args - Arguments to filter Hospedagems to count.
     * @example
     * // Count the number of Hospedagems
     * const count = await prisma.hospedagem.count({
     *   where: {
     *     // ... the filter for the Hospedagems we want to count
     *   }
     * })
    **/
    count<T extends hospedagemCountArgs>(
      args?: Subset<T, hospedagemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospedagemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hospedagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospedagemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HospedagemAggregateArgs>(args: Subset<T, HospedagemAggregateArgs>): Prisma.PrismaPromise<GetHospedagemAggregateType<T>>

    /**
     * Group by Hospedagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospedagemGroupByArgs} args - Group by arguments.
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
      T extends hospedagemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hospedagemGroupByArgs['orderBy'] }
        : { orderBy?: hospedagemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, hospedagemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospedagemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hospedagem model
   */
  readonly fields: hospedagemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hospedagem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hospedagemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the hospedagem model
   */ 
  interface hospedagemFieldRefs {
    readonly id: FieldRef<"hospedagem", 'Int'>
    readonly nome: FieldRef<"hospedagem", 'String'>
    readonly telefone: FieldRef<"hospedagem", 'String'>
    readonly descricao: FieldRef<"hospedagem", 'String'>
    readonly foto: FieldRef<"hospedagem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * hospedagem findUnique
   */
  export type hospedagemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospedagem
     */
    select?: hospedagemSelect<ExtArgs> | null
    /**
     * Filter, which hospedagem to fetch.
     */
    where: hospedagemWhereUniqueInput
  }

  /**
   * hospedagem findUniqueOrThrow
   */
  export type hospedagemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospedagem
     */
    select?: hospedagemSelect<ExtArgs> | null
    /**
     * Filter, which hospedagem to fetch.
     */
    where: hospedagemWhereUniqueInput
  }

  /**
   * hospedagem findFirst
   */
  export type hospedagemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospedagem
     */
    select?: hospedagemSelect<ExtArgs> | null
    /**
     * Filter, which hospedagem to fetch.
     */
    where?: hospedagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hospedagems to fetch.
     */
    orderBy?: hospedagemOrderByWithRelationInput | hospedagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hospedagems.
     */
    cursor?: hospedagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hospedagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hospedagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hospedagems.
     */
    distinct?: HospedagemScalarFieldEnum | HospedagemScalarFieldEnum[]
  }

  /**
   * hospedagem findFirstOrThrow
   */
  export type hospedagemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospedagem
     */
    select?: hospedagemSelect<ExtArgs> | null
    /**
     * Filter, which hospedagem to fetch.
     */
    where?: hospedagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hospedagems to fetch.
     */
    orderBy?: hospedagemOrderByWithRelationInput | hospedagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hospedagems.
     */
    cursor?: hospedagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hospedagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hospedagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hospedagems.
     */
    distinct?: HospedagemScalarFieldEnum | HospedagemScalarFieldEnum[]
  }

  /**
   * hospedagem findMany
   */
  export type hospedagemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospedagem
     */
    select?: hospedagemSelect<ExtArgs> | null
    /**
     * Filter, which hospedagems to fetch.
     */
    where?: hospedagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hospedagems to fetch.
     */
    orderBy?: hospedagemOrderByWithRelationInput | hospedagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hospedagems.
     */
    cursor?: hospedagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hospedagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hospedagems.
     */
    skip?: number
    distinct?: HospedagemScalarFieldEnum | HospedagemScalarFieldEnum[]
  }

  /**
   * hospedagem create
   */
  export type hospedagemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospedagem
     */
    select?: hospedagemSelect<ExtArgs> | null
    /**
     * The data needed to create a hospedagem.
     */
    data: XOR<hospedagemCreateInput, hospedagemUncheckedCreateInput>
  }

  /**
   * hospedagem createMany
   */
  export type hospedagemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hospedagems.
     */
    data: hospedagemCreateManyInput | hospedagemCreateManyInput[]
  }

  /**
   * hospedagem createManyAndReturn
   */
  export type hospedagemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospedagem
     */
    select?: hospedagemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many hospedagems.
     */
    data: hospedagemCreateManyInput | hospedagemCreateManyInput[]
  }

  /**
   * hospedagem update
   */
  export type hospedagemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospedagem
     */
    select?: hospedagemSelect<ExtArgs> | null
    /**
     * The data needed to update a hospedagem.
     */
    data: XOR<hospedagemUpdateInput, hospedagemUncheckedUpdateInput>
    /**
     * Choose, which hospedagem to update.
     */
    where: hospedagemWhereUniqueInput
  }

  /**
   * hospedagem updateMany
   */
  export type hospedagemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hospedagems.
     */
    data: XOR<hospedagemUpdateManyMutationInput, hospedagemUncheckedUpdateManyInput>
    /**
     * Filter which hospedagems to update
     */
    where?: hospedagemWhereInput
  }

  /**
   * hospedagem upsert
   */
  export type hospedagemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospedagem
     */
    select?: hospedagemSelect<ExtArgs> | null
    /**
     * The filter to search for the hospedagem to update in case it exists.
     */
    where: hospedagemWhereUniqueInput
    /**
     * In case the hospedagem found by the `where` argument doesn't exist, create a new hospedagem with this data.
     */
    create: XOR<hospedagemCreateInput, hospedagemUncheckedCreateInput>
    /**
     * In case the hospedagem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hospedagemUpdateInput, hospedagemUncheckedUpdateInput>
  }

  /**
   * hospedagem delete
   */
  export type hospedagemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospedagem
     */
    select?: hospedagemSelect<ExtArgs> | null
    /**
     * Filter which hospedagem to delete.
     */
    where: hospedagemWhereUniqueInput
  }

  /**
   * hospedagem deleteMany
   */
  export type hospedagemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hospedagems to delete
     */
    where?: hospedagemWhereInput
  }

  /**
   * hospedagem without action
   */
  export type hospedagemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospedagem
     */
    select?: hospedagemSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FuncionarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    password: 'password'
  };

  export type FuncionarioScalarFieldEnum = (typeof FuncionarioScalarFieldEnum)[keyof typeof FuncionarioScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    comentario: 'comentario',
    foto: 'foto'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const PontoTuristicoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    categoria: 'categoria',
    descricao: 'descricao',
    endereco: 'endereco',
    foto: 'foto'
  };

  export type PontoTuristicoScalarFieldEnum = (typeof PontoTuristicoScalarFieldEnum)[keyof typeof PontoTuristicoScalarFieldEnum]


  export const EventosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    local: 'local',
    contato: 'contato',
    descricao: 'descricao',
    foto: 'foto'
  };

  export type EventosScalarFieldEnum = (typeof EventosScalarFieldEnum)[keyof typeof EventosScalarFieldEnum]


  export const GastronomiaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    categoria: 'categoria',
    telefone: 'telefone',
    descricao: 'descricao',
    foto: 'foto'
  };

  export type GastronomiaScalarFieldEnum = (typeof GastronomiaScalarFieldEnum)[keyof typeof GastronomiaScalarFieldEnum]


  export const HospedagemScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    telefone: 'telefone',
    descricao: 'descricao',
    foto: 'foto'
  };

  export type HospedagemScalarFieldEnum = (typeof HospedagemScalarFieldEnum)[keyof typeof HospedagemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type funcionarioWhereInput = {
    AND?: funcionarioWhereInput | funcionarioWhereInput[]
    OR?: funcionarioWhereInput[]
    NOT?: funcionarioWhereInput | funcionarioWhereInput[]
    id?: IntFilter<"funcionario"> | number
    nome?: StringFilter<"funcionario"> | string
    email?: StringFilter<"funcionario"> | string
    telefone?: StringFilter<"funcionario"> | string
    password?: StringFilter<"funcionario"> | string
  }

  export type funcionarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    password?: SortOrder
  }

  export type funcionarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: funcionarioWhereInput | funcionarioWhereInput[]
    OR?: funcionarioWhereInput[]
    NOT?: funcionarioWhereInput | funcionarioWhereInput[]
    nome?: StringFilter<"funcionario"> | string
    telefone?: StringFilter<"funcionario"> | string
    password?: StringFilter<"funcionario"> | string
  }, "id" | "email">

  export type funcionarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    password?: SortOrder
    _count?: funcionarioCountOrderByAggregateInput
    _avg?: funcionarioAvgOrderByAggregateInput
    _max?: funcionarioMaxOrderByAggregateInput
    _min?: funcionarioMinOrderByAggregateInput
    _sum?: funcionarioSumOrderByAggregateInput
  }

  export type funcionarioScalarWhereWithAggregatesInput = {
    AND?: funcionarioScalarWhereWithAggregatesInput | funcionarioScalarWhereWithAggregatesInput[]
    OR?: funcionarioScalarWhereWithAggregatesInput[]
    NOT?: funcionarioScalarWhereWithAggregatesInput | funcionarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"funcionario"> | number
    nome?: StringWithAggregatesFilter<"funcionario"> | string
    email?: StringWithAggregatesFilter<"funcionario"> | string
    telefone?: StringWithAggregatesFilter<"funcionario"> | string
    password?: StringWithAggregatesFilter<"funcionario"> | string
  }

  export type clienteWhereInput = {
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    id?: IntFilter<"cliente"> | number
    nome?: StringFilter<"cliente"> | string
    comentario?: StringFilter<"cliente"> | string
    foto?: StringFilter<"cliente"> | string
  }

  export type clienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    comentario?: SortOrder
    foto?: SortOrder
  }

  export type clienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    nome?: StringFilter<"cliente"> | string
    comentario?: StringFilter<"cliente"> | string
    foto?: StringFilter<"cliente"> | string
  }, "id">

  export type clienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    comentario?: SortOrder
    foto?: SortOrder
    _count?: clienteCountOrderByAggregateInput
    _avg?: clienteAvgOrderByAggregateInput
    _max?: clienteMaxOrderByAggregateInput
    _min?: clienteMinOrderByAggregateInput
    _sum?: clienteSumOrderByAggregateInput
  }

  export type clienteScalarWhereWithAggregatesInput = {
    AND?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    OR?: clienteScalarWhereWithAggregatesInput[]
    NOT?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cliente"> | number
    nome?: StringWithAggregatesFilter<"cliente"> | string
    comentario?: StringWithAggregatesFilter<"cliente"> | string
    foto?: StringWithAggregatesFilter<"cliente"> | string
  }

  export type pontoTuristicoWhereInput = {
    AND?: pontoTuristicoWhereInput | pontoTuristicoWhereInput[]
    OR?: pontoTuristicoWhereInput[]
    NOT?: pontoTuristicoWhereInput | pontoTuristicoWhereInput[]
    id?: IntFilter<"pontoTuristico"> | number
    nome?: StringFilter<"pontoTuristico"> | string
    categoria?: StringFilter<"pontoTuristico"> | string
    descricao?: StringFilter<"pontoTuristico"> | string
    endereco?: StringFilter<"pontoTuristico"> | string
    foto?: StringFilter<"pontoTuristico"> | string
  }

  export type pontoTuristicoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    descricao?: SortOrder
    endereco?: SortOrder
    foto?: SortOrder
  }

  export type pontoTuristicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pontoTuristicoWhereInput | pontoTuristicoWhereInput[]
    OR?: pontoTuristicoWhereInput[]
    NOT?: pontoTuristicoWhereInput | pontoTuristicoWhereInput[]
    nome?: StringFilter<"pontoTuristico"> | string
    categoria?: StringFilter<"pontoTuristico"> | string
    descricao?: StringFilter<"pontoTuristico"> | string
    endereco?: StringFilter<"pontoTuristico"> | string
    foto?: StringFilter<"pontoTuristico"> | string
  }, "id">

  export type pontoTuristicoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    descricao?: SortOrder
    endereco?: SortOrder
    foto?: SortOrder
    _count?: pontoTuristicoCountOrderByAggregateInput
    _avg?: pontoTuristicoAvgOrderByAggregateInput
    _max?: pontoTuristicoMaxOrderByAggregateInput
    _min?: pontoTuristicoMinOrderByAggregateInput
    _sum?: pontoTuristicoSumOrderByAggregateInput
  }

  export type pontoTuristicoScalarWhereWithAggregatesInput = {
    AND?: pontoTuristicoScalarWhereWithAggregatesInput | pontoTuristicoScalarWhereWithAggregatesInput[]
    OR?: pontoTuristicoScalarWhereWithAggregatesInput[]
    NOT?: pontoTuristicoScalarWhereWithAggregatesInput | pontoTuristicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pontoTuristico"> | number
    nome?: StringWithAggregatesFilter<"pontoTuristico"> | string
    categoria?: StringWithAggregatesFilter<"pontoTuristico"> | string
    descricao?: StringWithAggregatesFilter<"pontoTuristico"> | string
    endereco?: StringWithAggregatesFilter<"pontoTuristico"> | string
    foto?: StringWithAggregatesFilter<"pontoTuristico"> | string
  }

  export type eventosWhereInput = {
    AND?: eventosWhereInput | eventosWhereInput[]
    OR?: eventosWhereInput[]
    NOT?: eventosWhereInput | eventosWhereInput[]
    id?: IntFilter<"eventos"> | number
    nome?: StringFilter<"eventos"> | string
    local?: StringFilter<"eventos"> | string
    contato?: StringFilter<"eventos"> | string
    descricao?: StringFilter<"eventos"> | string
    foto?: StringFilter<"eventos"> | string
  }

  export type eventosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    local?: SortOrder
    contato?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
  }

  export type eventosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: eventosWhereInput | eventosWhereInput[]
    OR?: eventosWhereInput[]
    NOT?: eventosWhereInput | eventosWhereInput[]
    nome?: StringFilter<"eventos"> | string
    local?: StringFilter<"eventos"> | string
    contato?: StringFilter<"eventos"> | string
    descricao?: StringFilter<"eventos"> | string
    foto?: StringFilter<"eventos"> | string
  }, "id">

  export type eventosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    local?: SortOrder
    contato?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
    _count?: eventosCountOrderByAggregateInput
    _avg?: eventosAvgOrderByAggregateInput
    _max?: eventosMaxOrderByAggregateInput
    _min?: eventosMinOrderByAggregateInput
    _sum?: eventosSumOrderByAggregateInput
  }

  export type eventosScalarWhereWithAggregatesInput = {
    AND?: eventosScalarWhereWithAggregatesInput | eventosScalarWhereWithAggregatesInput[]
    OR?: eventosScalarWhereWithAggregatesInput[]
    NOT?: eventosScalarWhereWithAggregatesInput | eventosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"eventos"> | number
    nome?: StringWithAggregatesFilter<"eventos"> | string
    local?: StringWithAggregatesFilter<"eventos"> | string
    contato?: StringWithAggregatesFilter<"eventos"> | string
    descricao?: StringWithAggregatesFilter<"eventos"> | string
    foto?: StringWithAggregatesFilter<"eventos"> | string
  }

  export type gastronomiaWhereInput = {
    AND?: gastronomiaWhereInput | gastronomiaWhereInput[]
    OR?: gastronomiaWhereInput[]
    NOT?: gastronomiaWhereInput | gastronomiaWhereInput[]
    id?: IntFilter<"gastronomia"> | number
    nome?: StringFilter<"gastronomia"> | string
    categoria?: StringFilter<"gastronomia"> | string
    telefone?: StringFilter<"gastronomia"> | string
    descricao?: StringFilter<"gastronomia"> | string
    foto?: StringFilter<"gastronomia"> | string
  }

  export type gastronomiaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    telefone?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
  }

  export type gastronomiaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: gastronomiaWhereInput | gastronomiaWhereInput[]
    OR?: gastronomiaWhereInput[]
    NOT?: gastronomiaWhereInput | gastronomiaWhereInput[]
    nome?: StringFilter<"gastronomia"> | string
    categoria?: StringFilter<"gastronomia"> | string
    telefone?: StringFilter<"gastronomia"> | string
    descricao?: StringFilter<"gastronomia"> | string
    foto?: StringFilter<"gastronomia"> | string
  }, "id">

  export type gastronomiaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    telefone?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
    _count?: gastronomiaCountOrderByAggregateInput
    _avg?: gastronomiaAvgOrderByAggregateInput
    _max?: gastronomiaMaxOrderByAggregateInput
    _min?: gastronomiaMinOrderByAggregateInput
    _sum?: gastronomiaSumOrderByAggregateInput
  }

  export type gastronomiaScalarWhereWithAggregatesInput = {
    AND?: gastronomiaScalarWhereWithAggregatesInput | gastronomiaScalarWhereWithAggregatesInput[]
    OR?: gastronomiaScalarWhereWithAggregatesInput[]
    NOT?: gastronomiaScalarWhereWithAggregatesInput | gastronomiaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"gastronomia"> | number
    nome?: StringWithAggregatesFilter<"gastronomia"> | string
    categoria?: StringWithAggregatesFilter<"gastronomia"> | string
    telefone?: StringWithAggregatesFilter<"gastronomia"> | string
    descricao?: StringWithAggregatesFilter<"gastronomia"> | string
    foto?: StringWithAggregatesFilter<"gastronomia"> | string
  }

  export type hospedagemWhereInput = {
    AND?: hospedagemWhereInput | hospedagemWhereInput[]
    OR?: hospedagemWhereInput[]
    NOT?: hospedagemWhereInput | hospedagemWhereInput[]
    id?: IntFilter<"hospedagem"> | number
    nome?: StringFilter<"hospedagem"> | string
    telefone?: StringFilter<"hospedagem"> | string
    descricao?: StringFilter<"hospedagem"> | string
    foto?: StringFilter<"hospedagem"> | string
  }

  export type hospedagemOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
  }

  export type hospedagemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hospedagemWhereInput | hospedagemWhereInput[]
    OR?: hospedagemWhereInput[]
    NOT?: hospedagemWhereInput | hospedagemWhereInput[]
    nome?: StringFilter<"hospedagem"> | string
    telefone?: StringFilter<"hospedagem"> | string
    descricao?: StringFilter<"hospedagem"> | string
    foto?: StringFilter<"hospedagem"> | string
  }, "id">

  export type hospedagemOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
    _count?: hospedagemCountOrderByAggregateInput
    _avg?: hospedagemAvgOrderByAggregateInput
    _max?: hospedagemMaxOrderByAggregateInput
    _min?: hospedagemMinOrderByAggregateInput
    _sum?: hospedagemSumOrderByAggregateInput
  }

  export type hospedagemScalarWhereWithAggregatesInput = {
    AND?: hospedagemScalarWhereWithAggregatesInput | hospedagemScalarWhereWithAggregatesInput[]
    OR?: hospedagemScalarWhereWithAggregatesInput[]
    NOT?: hospedagemScalarWhereWithAggregatesInput | hospedagemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hospedagem"> | number
    nome?: StringWithAggregatesFilter<"hospedagem"> | string
    telefone?: StringWithAggregatesFilter<"hospedagem"> | string
    descricao?: StringWithAggregatesFilter<"hospedagem"> | string
    foto?: StringWithAggregatesFilter<"hospedagem"> | string
  }

  export type funcionarioCreateInput = {
    nome: string
    email: string
    telefone: string
    password: string
  }

  export type funcionarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    password: string
  }

  export type funcionarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type funcionarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type funcionarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    password: string
  }

  export type funcionarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type funcionarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type clienteCreateInput = {
    nome: string
    comentario: string
    foto: string
  }

  export type clienteUncheckedCreateInput = {
    id?: number
    nome: string
    comentario: string
    foto: string
  }

  export type clienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type clienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type clienteCreateManyInput = {
    id?: number
    nome: string
    comentario: string
    foto: string
  }

  export type clienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type clienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type pontoTuristicoCreateInput = {
    nome: string
    categoria: string
    descricao: string
    endereco: string
    foto: string
  }

  export type pontoTuristicoUncheckedCreateInput = {
    id?: number
    nome: string
    categoria: string
    descricao: string
    endereco: string
    foto: string
  }

  export type pontoTuristicoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type pontoTuristicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type pontoTuristicoCreateManyInput = {
    id?: number
    nome: string
    categoria: string
    descricao: string
    endereco: string
    foto: string
  }

  export type pontoTuristicoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type pontoTuristicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type eventosCreateInput = {
    nome: string
    local: string
    contato: string
    descricao: string
    foto: string
  }

  export type eventosUncheckedCreateInput = {
    id?: number
    nome: string
    local: string
    contato: string
    descricao: string
    foto: string
  }

  export type eventosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    local?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type eventosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    local?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type eventosCreateManyInput = {
    id?: number
    nome: string
    local: string
    contato: string
    descricao: string
    foto: string
  }

  export type eventosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    local?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type eventosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    local?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type gastronomiaCreateInput = {
    nome: string
    categoria: string
    telefone: string
    descricao: string
    foto: string
  }

  export type gastronomiaUncheckedCreateInput = {
    id?: number
    nome: string
    categoria: string
    telefone: string
    descricao: string
    foto: string
  }

  export type gastronomiaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type gastronomiaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type gastronomiaCreateManyInput = {
    id?: number
    nome: string
    categoria: string
    telefone: string
    descricao: string
    foto: string
  }

  export type gastronomiaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type gastronomiaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type hospedagemCreateInput = {
    nome: string
    telefone: string
    descricao: string
    foto: string
  }

  export type hospedagemUncheckedCreateInput = {
    id?: number
    nome: string
    telefone: string
    descricao: string
    foto: string
  }

  export type hospedagemUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type hospedagemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type hospedagemCreateManyInput = {
    id?: number
    nome: string
    telefone: string
    descricao: string
    foto: string
  }

  export type hospedagemUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type hospedagemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type funcionarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    password?: SortOrder
  }

  export type funcionarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type funcionarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    password?: SortOrder
  }

  export type funcionarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    password?: SortOrder
  }

  export type funcionarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type clienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    comentario?: SortOrder
    foto?: SortOrder
  }

  export type clienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type clienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    comentario?: SortOrder
    foto?: SortOrder
  }

  export type clienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    comentario?: SortOrder
    foto?: SortOrder
  }

  export type clienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type pontoTuristicoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    descricao?: SortOrder
    endereco?: SortOrder
    foto?: SortOrder
  }

  export type pontoTuristicoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type pontoTuristicoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    descricao?: SortOrder
    endereco?: SortOrder
    foto?: SortOrder
  }

  export type pontoTuristicoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    descricao?: SortOrder
    endereco?: SortOrder
    foto?: SortOrder
  }

  export type pontoTuristicoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type eventosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    local?: SortOrder
    contato?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
  }

  export type eventosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type eventosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    local?: SortOrder
    contato?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
  }

  export type eventosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    local?: SortOrder
    contato?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
  }

  export type eventosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type gastronomiaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    telefone?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
  }

  export type gastronomiaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type gastronomiaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    telefone?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
  }

  export type gastronomiaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    telefone?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
  }

  export type gastronomiaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type hospedagemCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
  }

  export type hospedagemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type hospedagemMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
  }

  export type hospedagemMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    descricao?: SortOrder
    foto?: SortOrder
  }

  export type hospedagemSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use funcionarioDefaultArgs instead
     */
    export type funcionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = funcionarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use clienteDefaultArgs instead
     */
    export type clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = clienteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use pontoTuristicoDefaultArgs instead
     */
    export type pontoTuristicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = pontoTuristicoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use eventosDefaultArgs instead
     */
    export type eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = eventosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use gastronomiaDefaultArgs instead
     */
    export type gastronomiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = gastronomiaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use hospedagemDefaultArgs instead
     */
    export type hospedagemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = hospedagemDefaultArgs<ExtArgs>

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