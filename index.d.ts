import type { Channel, Entry } from "xast-util-feed";

export default function generate({
  fileName,
  channel,
  entries,
}: {
  fileName?: string;
  channel: Channel;
  entries: Array<Entry>;
}): void;
