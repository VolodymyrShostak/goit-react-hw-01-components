import PropTypes from 'prop-types';

export default function Statistics({
  title,
  stats: { docxpercentage, mp3percentage, pdfpercentage, mp4percentage },
}) {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">.docx</span>
          <span class="percentage">{docxpercentage}%</span>
        </li>
        <li class="item">
          <span class="label">.mp3</span>
          <span class="percentage">{mp3percentage}%</span>
        </li>
        <li class="item">
          <span class="label">.pdf</span>
          <span class="percentage">{pdfpercentage}%</span>
        </li>
        <li class="item">
          <span class="label">.mp4</span>
          <span class="percentage">{mp4percentage}%</span>
        </li>
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.exact({
    docxPercentage: PropTypes.number.isRequired,
    mp3Percentage: PropTypes.number.isRequired,
    pdfPercentage: PropTypes.number.isRequired,
    mp4Percentage: PropTypes.number.isRequired,
  }),
};
