import * as fs from "fs";
import * as path from "path";
import { rss } from "xast-util-feed";
import { toXml } from "xast-util-to-xml";

/** @typedef {import('xast-util-feed').Channel} Channel */
/** @typedef {import('xast-util-feed').Entry} Entry */
/** @type {({ fileName?: string; channel: Channel; entries: Array<Entry> }) => void} */
export default function generate({ fileName = "feed.xml", channel, entries }) {
  const feed = toXml(rss(channel, entries));

  fs.writeFileSync(path.join(process.cwd(), "public", fileName), feed, {
    encoding: "utf-8",
  });
}
