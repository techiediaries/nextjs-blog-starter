import cn from 'classnames'
import Container from './Container'
import { GITHUB_REPO } from '../../lib/constants'

export default function Banner({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-sm text-center fixed z-30 w-screen">
          {preview ? (
            <div>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </div>
          ) : (
            <>
              The source code for this blog is{' '}
              <a
                href={GITHUB_REPO}
                className="underline hover:text-success duration-200 transition-colors"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
