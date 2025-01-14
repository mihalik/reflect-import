import {
  ConvertOptions,
  ConvertResponse,
  ConvertorAcceptType,
  REFLECT_HOSTNAME,
} from './types'

export abstract class Convertor {
  static accept: ConvertorAcceptType
  static description: string

  graphId: string
  linkHost: string

  constructor({
    graphId,
    linkHost = REFLECT_HOSTNAME,
  }: {
    graphId: string
    linkHost?: string
  }) {
    this.graphId = graphId
    this.linkHost = linkHost
  }

  abstract convert(options: ConvertOptions): Promise<ConvertResponse>
}
