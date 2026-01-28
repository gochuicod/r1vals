import React from 'react';

interface DrawerProps {
  triggerIcon: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  children?: React.ReactNode;
  size?: number | string; // px (number) or any css value ("40vh", "24rem", etc.)
  overlayClose?: boolean;
}

function Drawer({
  triggerIcon,
  side = 'bottom',
  children,
  size = '40vh',
  overlayClose = true,
}: DrawerProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((v) => !v);

  // Normalize size
  const sizeValue = typeof size === 'number' ? `${size}px` : size;

  // Container (position + dimensions) and animation classes
  const panelBase =
    'fixed z-20 bg-black/85 p-8 text-white shadow-lg transition-transform duration-300 ease-out';

  const panelBySide: Record<
    NonNullable<DrawerProps['side']>,
    {
      className: string;
      style: React.CSSProperties;
      openTransform: string;
      closedTransform: string;
    }
  > = {
    top: {
      className: 'top-0 left-0 w-full',
      style: { height: sizeValue },
      openTransform: 'translate-y-0',
      closedTransform: '-translate-y-full',
    },
    bottom: {
      className: 'bottom-0 left-0 w-full',
      style: { height: sizeValue },
      openTransform: 'translate-y-0',
      closedTransform: 'translate-y-full',
    },
    left: {
      className: 'top-0 left-0 h-full',
      style: { width: sizeValue },
      openTransform: 'translate-x-0',
      closedTransform: '-translate-x-full',
    },
    right: {
      className: 'top-0 right-0 h-full',
      style: { width: sizeValue },
      openTransform: 'translate-x-0',
      closedTransform: 'translate-x-full',
    },
  };

  const cfg = panelBySide[side];

  return (
    <>
      <button type="button" onClick={toggle}>
        {triggerIcon}
      </button>

      {/* Mount overlay + panel; keep in DOM for smooth exit animation */}
      <div
        className={[
          'fixed inset-0 z-10',
          isOpen ? 'pointer-events-auto' : 'pointer-events-none',
        ].join(' ')}
        aria-hidden={!isOpen}
      >
        {/* Overlay */}
        <div
          className={[
            'absolute inset-0 bg-black/50 transition-opacity duration-300',
            isOpen ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          onClick={overlayClose ? close : undefined}
        />

        {/* Panel */}
        <div
          role="dialog"
          aria-modal="true"
          className={[
            panelBase,
            cfg.className,
            isOpen ? cfg.openTransform : cfg.closedTransform,
          ].join(' ')}
          style={cfg.style}
          onClick={(e) => e.stopPropagation()}
        >
          {children}

          {/* <button
            type="button"
            onClick={close}
            className="mt-6 inline-flex rounded bg-white/10 px-3 py-2 hover:bg-white/20"
          >
            Close
          </button> */}
        </div>
      </div>
    </>
  );
}

export default Drawer;
