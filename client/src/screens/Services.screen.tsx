export const Services: React.FC = () => {
  return (
    <div className="py-6 rounded-xl mb-6">
      <h3 className="font-bold text-left text-accent md:px-8 px-2">
        Services & Fees
      </h3>
      <div className="pt-4 md:px-8 px-2 grid md:grid-cols-2 grid-cols-1 gap-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-bold text-tertiary leading-none mb-2">
              Design Fees
            </p>
          </div>
          <div className="items-baseline">
            <span className="text-sm font-medium">
              $100 per hour; minimum of $500 per job (includes onsite visits).
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-bold text-tertiary leading-none mb-2">
              Installation of Cabinets
            </p>
          </div>
          <div className="items-baseline">
            <span className="text-sm font-medium">
              $75 per hour; minimum of $1,500 per kitchen.
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-bold text-tertiary leading-none mb-2">
              Re-facing Cabinets
            </p>
          </div>
          <div className="items-baseline">
            <span className="text-sm font-medium">
              $75 per hour; minimum of $750 per kitchen.
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-bold text-tertiary leading-none mb-2">
              Plumbing Work
            </p>
          </div>
          <div className="items-baseline">
            <span className="text-sm font-medium">
              $85 per hour; minimum of $500 per kitchen.
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-bold text-tertiary leading-none mb-2">
              Electrical Work
            </p>
          </div>
          <div className="items-baseline">
            <span className="text-sm font-medium">
              $85 per hour; minimum of $500 per kitchen.
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-bold text-tertiary leading-none mb-2">
              Painting/Wallpaper Work
            </p>
          </div>
          <div className="items-baseline">
            <span className="text-sm font-medium">
              Contracted to outside painting contractor (AZ Design). They charge
              a minimum of $500 to paint a kitchen and $40 per hour to hang
              wallpaper. The client meets with the sub-contractor for details.
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-bold text-tertiary leading-none mb-2">
              General Construction work
            </p>
          </div>
          <div className="items-baseline">
            <span className="text-sm font-medium">
              Moving walls, sheetrock, framing, windows, etc. Some of this work
              is contracted out if needed, but normal charges are $60.00 per
              hour for labor.
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-bold text-tertiary leading-none mb-2">
              Deliveries
            </p>
          </div>
          <div className="items-baseline">
            <span className="text-sm font-medium">
              $50 minimum on 1st piece and then $25 for each extra piece. Large
              items will incur a $100 surcharge for delivery. Any installation
              required will be charged at the standard hourly rate of $85 per
              hour.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
