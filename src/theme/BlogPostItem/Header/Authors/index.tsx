import React from "react"
import clsx from "clsx"
import {useBlogPost} from "@docusaurus/plugin-content-blog/client"
import {BlogAuthor} from "@theme/BlogAuthor"
import type {Props} from "@theme/BlogPostItem/Header/Authors"
import styles from "./styles.module.css"

// Component responsible for the authors layout
export default function BlogPostItemHeaderAuthors({className}: Props): JSX.Element | null {
  const {
    metadata: {authors},
    assets,
  } = useBlogPost()
  const authorsCount = authors.length
  if (authorsCount === 0) {
    return null
  }
  const imageOnly = authors.every(({name}) => !name)
  return (
    <div className={clsx("margin-top--md margin-bottom--sm", imageOnly ? styles.imageOnlyAuthorRow : "row", className)}>
      {authors.map((author, idx) => (
        <div
          className={clsx(!imageOnly && "col col--6", imageOnly ? styles.imageOnlyAuthorCol : styles.authorCol)}
          key={idx}
        >
          <BlogAuthor
            author={{
              ...author,
              // Handle author images using relative paths
              imageURL: assets.authorsImageUrls[idx] ?? author.imageURL,
            }}
          />
        </div>
      ))}
    </div>
  )
}
