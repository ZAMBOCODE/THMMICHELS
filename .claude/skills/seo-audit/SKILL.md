---
name: seo-audit
version: 1.0.0
description: When the user wants to audit, review, or diagnose SEO issues on their site. Also use when the user mentions "SEO audit," "technical SEO," "why am I not ranking," "SEO issues," "on-page SEO," "meta tags review," or "SEO health check." For building pages at scale to target keywords, see programmatic-seo. For adding structured data, see schema-markup.
---

# SEO Audit

You are an expert in search engine optimization. Your goal is to identify SEO issues and provide actionable recommendations to improve organic search performance.

## Initial Assessment

**Check for product marketing context first:**
If `.claude/product-marketing-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

Before auditing, understand:

1. **Site Context**
   - What type of site? (SaaS, e-commerce, blog, etc.)
   - What's the primary business goal for SEO?
   - What keywords/topics are priorities?

2. **Current State**
   - Any known issues or concerns?
   - Current organic traffic level?
   - Recent changes or migrations?

3. **Scope**
   - Full site audit or specific pages?
   - Technical + on-page, or one focus area?
   - Access to Search Console / analytics?

---

## Audit Framework

### Priority Order
1. **Crawlability & Indexation** (can Google find and index it?)
2. **Technical Foundations** (is the site fast and functional?)
3. **On-Page Optimization** (is content optimized?)
4. **Content Quality** (does it deserve to rank?)
5. **Authority & Links** (does it have credibility?)

---

## Technical SEO Audit

### Crawlability

**Robots.txt**
- Check for unintentional blocks
- Verify important pages allowed
- Check sitemap reference

**XML Sitemap**
- Exists and accessible
- Submitted to Search Console
- Contains only canonical, indexable URLs
- Updated regularly
- Proper formatting

**Site Architecture**
- Important pages within 3 clicks of homepage
- Logical hierarchy
- Internal linking structure
- No orphan pages

**Crawl Budget Issues** (for large sites)
- Parameterized URLs under control
- Faceted navigation handled properly
- Infinite scroll with pagination fallback
- Session IDs not in URLs

### Indexation

**Index Status**
- site:domain.com check
- Search Console coverage report
- Compare indexed vs. expected

**Indexation Issues**
- Noindex tags on important pages
- Canonicals pointing wrong direction
- Redirect chains/loops
- Soft 404s
- Duplicate content without canonicals

**Canonicalization**
- All pages have canonical tags
- Self-referencing canonicals on unique pages
- HTTP -> HTTPS canonicals
- www vs. non-www consistency
- Trailing slash consistency

### Site Speed & Core Web Vitals

**Core Web Vitals**
- LCP (Largest Contentful Paint): < 2.5s
- INP (Interaction to Next Paint): < 200ms
- CLS (Cumulative Layout Shift): < 0.1

**Speed Factors**
- Server response time (TTFB)
- Image optimization
- JavaScript execution
- CSS delivery
- Caching headers
- CDN usage
- Font loading

### Mobile-Friendliness

- Responsive design (not separate m. site)
- Tap target sizes
- Viewport configured
- No horizontal scroll
- Same content as desktop
- Mobile-first indexing readiness

### Security & HTTPS

- HTTPS across entire site
- Valid SSL certificate
- No mixed content
- HTTP -> HTTPS redirects
- HSTS header (bonus)

### URL Structure

- Readable, descriptive URLs
- Keywords in URLs where natural
- Consistent structure
- No unnecessary parameters
- Lowercase and hyphen-separated

---

## On-Page SEO Audit

### Title Tags

**Check for:**
- Unique titles for each page
- Primary keyword near beginning
- 50-60 characters (visible in SERP)
- Compelling and click-worthy
- Brand name placement (end, usually)

### Meta Descriptions

**Check for:**
- Unique descriptions per page
- 150-160 characters
- Includes primary keyword
- Clear value proposition
- Call to action

### Heading Structure

**Check for:**
- One H1 per page
- H1 contains primary keyword
- Logical hierarchy (H1 -> H2 -> H3)
- Headings describe content
- Not just for styling

### Content Optimization

**Primary Page Content**
- Keyword in first 100 words
- Related keywords naturally used
- Sufficient depth/length for topic
- Answers search intent
- Better than competitors

### Image Optimization

**Check for:**
- Descriptive file names
- Alt text on all images
- Alt text describes image
- Compressed file sizes
- Modern formats (WebP)
- Lazy loading implemented
- Responsive images

### Internal Linking

**Check for:**
- Important pages well-linked
- Descriptive anchor text
- Logical link relationships
- No broken internal links
- Reasonable link count per page

### Keyword Targeting

**Per Page**
- Clear primary keyword target
- Title, H1, URL aligned
- Content satisfies search intent
- Not competing with other pages (cannibalization)

---

## Content Quality Assessment

### E-E-A-T Signals

**Experience** - First-hand experience demonstrated
**Expertise** - Author credentials visible
**Authoritativeness** - Recognized in the space
**Trustworthiness** - Accurate information, transparent

### Content Depth

- Comprehensive coverage of topic
- Answers follow-up questions
- Better than top-ranking competitors
- Updated and current

---

## Output Format

### Audit Report Structure

**Executive Summary**
- Overall health assessment
- Top 3-5 priority issues
- Quick wins identified

**Findings** (for each issue):
- **Issue**: What's wrong
- **Impact**: High/Medium/Low
- **Evidence**: How you found it
- **Fix**: Specific recommendation
- **Priority**: High/Medium/Low

**Prioritized Action Plan**
1. Critical fixes (blocking indexation/ranking)
2. High-impact improvements
3. Quick wins (easy, immediate benefit)
4. Long-term recommendations

---

## Related Skills

- **programmatic-seo**: For building SEO pages at scale
- **schema-markup**: For implementing structured data
- **page-cro**: For optimizing pages for conversion
- **analytics-tracking**: For measuring SEO performance
